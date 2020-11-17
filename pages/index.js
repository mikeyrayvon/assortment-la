import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import DefaultLayout from 'layouts'
import ProjectList from 'components/ProjectList'

const Landing = ({ settings, projects }) => {
  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Assortment</title>
      </Head>
      <ProjectList projects={projects} />
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
      projects: projects ? projects.results : [],
      preview
    }
  }
}

export default Landing
