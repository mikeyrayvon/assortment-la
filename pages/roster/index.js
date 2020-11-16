import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import DefaultLayout from 'layouts'
import TalentList from 'components/TalentList'

const Roster = ({ settings, roster }) => {
  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Assortment | Roster</title>
      </Head>
      <TalentList roster={roster} />
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

  return {
    props: {
      settings,
      roster: roster ? roster.results : [],
      preview
    }
  }
}

export default Roster
