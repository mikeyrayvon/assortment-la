import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import DefaultLayout from 'layouts';
import EditionList from 'components/EditionList';

const Editions = ({ settings, editions }) => {
  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Assortment | Editions</title>
      </Head>
      <EditionList editions={editions} />
    </DefaultLayout>
  );
};

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const settings = await Client().getSingle('settings') || {}

  const editions = await Client().query(
    Prismic.Predicates.at('document.type', 'edition'), {
      orderings: '[my.edition.title]',
      ...(ref ? { ref } : null)
    },
  ).catch(error => {
    console.log(error)
  }) || {}

  return {
    props: {
      settings,
      editions: editions ? editions.results : [],
      preview
    }
  }
}

export default Editions;
