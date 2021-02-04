import Prismic from 'prismic-javascript'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'

import { queryRepeatableDocuments } from 'utils/queries'

import DefaultLayout from 'layouts'
import ProjectSlider from 'components/ProjectSlider'

import { Client } from 'utils/prismicHelpers'

const Project = ({ settings, project, talent }) => {

  if (project && project.data) {

    let title = 'Assortment'

    if (project.data.title) {
      title += ` | ${project.data.title}`
    }

    if (talent && talent.data) {
      title += ` | ${talent.data.name}`
    }

    return (
      <DefaultLayout settings={settings}>
        <Head>
          <title>{title}</title>
        </Head>
        <ProjectSlider project={project} talent={talent} showTalentName />
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData

  const settings = await Client().getSingle('settings') || {}

  const project = await Client().getByUID('project', params.uid, ref ? { ref } : null) || {}

  let talent

  if (project.data.talent.uid) {
    talent = await Client().getByUID('talent', project.data.talent.uid, ref ? { ref } : null) || {}
  }

  return {
    props: {
      settings,
      preview,
      project,
      talent: talent ? talent : null,
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
