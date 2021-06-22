import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import DefaultLayout from 'components/DefaultLayout'
import TalentList from 'components/TalentList'

const Roster = ({ settings, roster, services }) => {
  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Assortment</title>
      </Head>
      <TalentList roster={roster} services={services} />
    </DefaultLayout>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const settings = await Client().getSingle('settings') || {}

  const roster = await Client().query(
    Prismic.Predicates.at('document.type', 'talent'), {
      orderings: '[my.talent.name]',
      pageSize: 100,
      fetch: ['talent.name','talent.services','talent.main_image'],
      fetchLinks: 'service.title',
      ...(ref ? { ref } : null)
    },
  ).catch(error => {
    console.log(error)
  }) || {}

  return {
    props: {
      preview,
      settings,
      roster: roster ? roster.results : []
    }
  }
}

export default Roster
