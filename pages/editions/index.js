import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import DefaultLayout from 'layouts';
import EditionList from 'components/EditionList';
import EditionFeaturedItem from 'components/EditionFeaturedItem';

const Editions = ({ settings, editions }) => {
  const pastEditions = editions.slice(1)
  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Assortment | Editions</title>
      </Head>
      <EditionFeaturedItem edition={editions[0]} />
      <EditionList editions={pastEditions} />
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
