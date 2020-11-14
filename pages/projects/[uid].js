import React from 'react';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';

import { queryRepeatableDocuments } from 'utils/queries'

// Project components
import DefaultLayout from 'layouts';

// Project functions & styles
import { Client } from 'utils/prismicHelpers';
import { projectStyles } from 'styles';

/**
 * Post page component
 */
const Project = ({ project }) => {
  if (project && project.data) {
    const hasTitle = RichText.asText(project.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(project.data.title) : 'Untitled';

    return (
      <DefaultLayout>
        <Head>
          <title>{title}</title>
        </Head>
        <div className='main'>
          <div className='outer-container'>
            <h1>{title}</h1>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData
  const project = await Client().getByUID('project', params.uid, ref ? { ref } : null) || {}
  return {
    props: {
      preview,
      project
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'project')
  return {
    paths: documents.map(doc => `/projects/${doc.uid}`),
    fallback: true,
  }
}

export default Project;
