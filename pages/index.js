import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import DefaultLayout from 'layouts'
import LandingSlider from 'components/LandingSlider'

import { useWindowSize } from 'utils/hooks'

const Landing = ({ settings, docs }) => {
  const windowSize = useWindowSize()

  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Assortment</title>
      </Head>
      <LandingSlider docs={docs} shouldAnimate={windowSize.width >= 768} />
    </DefaultLayout>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const settings = await Client().getSingle('settings') || {}

  const projects = await Client().query(
    Prismic.Predicates.at('document.type', 'project'), {
      orderings: '[my.project.date desc]',
      pageSize: 100,
      fetch: ['project.title','project.talent','project.main_image'],
      fetchLinks: 'talent.name',
      ...(ref ? { ref } : null)
    },
  ).catch(error => {
    console.log(error)
  }) || {}

  return {
    props: {
      settings,
      docs: projects ? projects.results : [],
      preview
    }
  }
}

export default Landing
