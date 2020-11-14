import React from 'react';
import Head from 'next/head';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';

// Project components & functions
import DefaultLayout from 'layouts';
import { ProjectList } from 'components/home';
import { Client } from 'utils/prismicHelpers';

/**
 * Homepage component
 */
const Landing = ({ projects }) => {
  return (
    <DefaultLayout>
      <Head>
        <title>Assortment</title>
      </Head>
      <ProjectList projects={projects} />
    </DefaultLayout>
  );
};

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const projects = await client.query(
    Prismic.Predicates.at('document.type', 'project'), {
      orderings: '[my.post.date desc]',
      ...(ref ? { ref } : null)
    },
  )

  return {
    props: {
      projects: projects ? projects.results : [],
      preview
    }
  }
}

export default Landing;
