import Prismic from 'prismic-javascript'
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';

import { queryRepeatableDocuments } from 'utils/queries'

import DefaultLayout from 'layouts';
import ProjectSlider from 'components/ProjectSlider';
import ProjectList from 'components/ProjectList';

import { Client } from 'utils/prismicHelpers';

const Project = ({ settings, project, talent, relatedProjects }) => {

  if (project && project.data) {

    let title = 'Assortment'

    if (project.data.title) {
      title += ` | ${project.data.title}`
    }

    if (talent.data) {
      title += ` | ${talent.data.name}`
    }

    return (
      <DefaultLayout settings={settings}>
        <Head>
          <title>{title}</title>
        </Head>
        <ProjectSlider project={project} talent={talent} />
        {relatedProjects.length > 0 &&
          <section>
            <div className='container mx-auto border-t pt-8 mb-32'>
              <h2>Related Projects</h2>
            </div>
            <ProjectList projects={relatedProjects} />
          </section>
        }
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData

  const settings = await Client().getSingle('settings') || {}

  const project = await Client().getByUID('project', params.uid, ref ? { ref } : null) || {}

  let talent, relatedProjects

  if (project.data.talent) {

    talent = await Client().getByUID('talent', project.data.talent.uid, ref ? { ref } : null) || {}

    relatedProjects = await Client().query([
      Prismic.Predicates.at('document.type', 'project'),
      Prismic.Predicates.at('my.project.talent', project.data.talent.id),
      Prismic.Predicates.not('document.id', project.id)
    ], {
      ...(ref ? { ref } : null)
    }).catch(error => {
      console.log(error)
    }) || {}

  }

  return {
    props: {
      settings,
      preview,
      project,
      talent,
      relatedProjects: relatedProjects ? relatedProjects.results : [],
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'project')
  return {
    paths: documents.map(doc => `/projects/${doc.uid}`),
    fallback: true,
  }
}

export default Project;
