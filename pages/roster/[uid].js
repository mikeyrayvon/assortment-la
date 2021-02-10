import Prismic from 'prismic-javascript'
import Head from 'next/head'

import { queryRepeatableDocuments } from 'utils/queries'

import DefaultLayout from 'layouts'
import ProjectSlider from 'components/ProjectSlider'
import TalentHeader from 'components/TalentHeader'
import EditionList from 'components/EditionList'
import SectionHeader from 'components/SectionHeader'
import PortfolioSlider from 'components/PortfolioSlider'

import { hrefResolver, linkResolver } from 'prismic-configuration'
import { Client } from 'utils/prismicHelpers'

const Talent = ({ settings, talent, relatedProjects, relatedEditions }) => {

  if (talent && talent.data) {

    let title = 'Assortment'

    if (talent.data.name) {
      title += ` | ${talent.data.name}`
    }

    console.log(talent.data)

    return (
      <DefaultLayout settings={settings}>
        <Head>
          <title>{title}</title>
        </Head>
        <TalentHeader talent={talent} />
        {talent.data.body && talent.data.body.length > 0 &&
          talent.data.body.map((portfolio, index) => (
            <section>
              <SectionHeader />
              <PortfolioSlider talent={talent} portfolio={portfolio} />
            </section>
          ))
        }
        {relatedProjects && relatedProjects.length > 0 &&
          relatedProjects.map((project, index) => (
            <section key={`${talent.id}_${project.id}`}>
              <SectionHeader />
              <ProjectSlider project={project} talent={talent} />
            </section>
          ))
        }
        {relatedEditions && relatedEditions.length > 0 &&
          <section>
            <SectionHeader />
            <div className='mt-40'>
              <EditionList editions={relatedEditions} />
            </div>
          </section>
        }
      </DefaultLayout>
    )
  }

  return null
}

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData

  const settings = await Client().getSingle('settings') || {}

  const talent = await Client().getByUID('talent', params.uid, {
    fetchLinks: 'service.title',
    ...(ref ? { ref } : null)
  }) || {}

  const relatedProjects = await Client().query([
    Prismic.Predicates.at('document.type', 'project'),
    Prismic.Predicates.at('my.project.talent', talent.id)
  ], {
    ...(ref ? { ref } : null)
  }).catch(error => {
    console.log(error)
  }) || {}

  const relatedEditions = await Client().query([
    Prismic.Predicates.at('document.type', 'edition'),
    Prismic.Predicates.at('my.edition.talent', talent.id)
  ], {
    ...(ref ? { ref } : null),
  }).catch(error => {
    console.log(error)
  }) || {}

  return {
    props: {
      settings,
      preview,
      talent,
      relatedProjects: relatedProjects ? relatedProjects.results : [],
      relatedEditions: relatedEditions ? relatedEditions.results : [],
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'talent')
  return {
    paths: documents.map(doc => `/roster/${doc.uid}`),
    fallback: true,
  }
}

export default Talent
