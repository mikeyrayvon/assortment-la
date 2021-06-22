import Prismic from 'prismic-javascript'
import Head from 'next/head'

import { queryRepeatableDocuments } from 'utils/queries'

import DefaultLayout from 'components/DefaultLayout'
import TalentHeader from 'components/TalentHeader'
import EditionList from 'components/EditionList'
import SectionHeader from 'components/SectionHeader'
import PortfolioSlider from 'components/PortfolioSlider'

import { hrefResolver, linkResolver } from 'prismic-configuration'
import { Client } from 'utils/prismicHelpers'

const Talent = ({ settings, talent, relatedEditions }) => {

  if (talent && talent.data) {

    let title = 'Assortment'

    if (talent.data.name) {
      title += ` | ${talent.data.name}`
    }

    return (
      <DefaultLayout settings={settings}>
        <Head>
          <title>{title}</title>
        </Head>
        <TalentHeader talent={talent} />
        {talent.data.body && talent.data.body.length > 0 &&
          talent.data.body.map((portfolio, index) => (
            <section key={`${talent.id}_${portfolio.id}`}>
              <SectionHeader />
              <PortfolioSlider talent={talent} portfolio={portfolio} />
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
