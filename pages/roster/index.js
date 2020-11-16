import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import DefaultLayout from 'layouts'
import TalentList from 'components/TalentList'

const Roster = ({ settings, roster, services }) => {
  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Assortment | Roster</title>
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
      ...(ref ? { ref } : null)
    },
  ).catch(error => {
    console.log(error)
  }) || {}

  const services = await Client().query(
    Prismic.Predicates.at('document.type', 'service')
  ).catch(error => {
    console.log(error)
  }) || {}

  return {
    props: {
      preview,
      settings,
      roster: roster ? roster.results : [],
      services: services ? services.results : [],
    }
  }
}

export default Roster
