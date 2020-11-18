import Head from 'next/head'
import {RichText} from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import { hrefResolver, linkResolver } from 'prismic-configuration'

import DefaultLayout from 'layouts'
import Container from 'components/Container'
import TalentList from 'components/TalentList'

const Agency = ({ settings, agency }) => {
  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Assortment | Agency</title>
      </Head>
      {agency && agency.data &&
        <Container>
          <div className='text-4xl sm:text-5xl md:text-7xl font-query mb-20'>
            {RichText.render(agency.data.body, linkResolver)}
          </div>
        </Container>
      }
    </DefaultLayout>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const settings = await Client().getSingle('settings') || {}

  const agency = await Client().getSingle('agency', {
    ...ref ? { ref } : null
  }) || {}

  return {
    props: {
      settings,
      agency,
      preview
    }
  }
}

export default Agency
