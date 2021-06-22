import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import DefaultLayout from 'components/DefaultLayout'
import LandingSlider from 'components/LandingSlider'

const News = ({ settings, doc, projects }) => {
  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Assortment | News</title>
      </Head>
      <LandingSlider docs={projects} shouldAnimate={false} />
    </DefaultLayout>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const settings = await Client().getSingle('settings') || {}

  const doc = await Client().getSingle('landing') || {}

  let projects

  if (doc.data.featured.length > 0) {
    const projectIds = doc.data.featured.map(project => project.doc.id)
    projects = await Client().getByIDs(projectIds, {
      fetchLinks: 'talent.name',
    })
  }

  return {
    props: {
      settings,
      doc,
      projects: projects ? projects.results : [],
      preview
    }
  }
}

export default News
