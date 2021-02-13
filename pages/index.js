import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import DefaultLayout from 'layouts'
import LandingSlider from 'components/LandingSlider'

import { useWindowSize } from 'utils/hooks'

const Landing = ({ settings, doc, projects }) => {
  const windowSize = useWindowSize()

  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Assortment</title>
      </Head>
      <LandingSlider docs={projects} shouldAnimate={windowSize.width >= 768} />
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

export default Landing
