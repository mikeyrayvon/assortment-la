import { useState, useRef } from 'react'
import Prismic from 'prismic-javascript'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'

import { queryRepeatableDocuments } from 'utils/queries'

import DefaultLayout from 'layouts'
import Container from 'components/Container'
import Gallery from 'components/Gallery'
import ResponsiveImage from 'components/ResponsiveImage'

import { Client } from 'utils/prismicHelpers'

const Edition = ({ settings, edition }) => {
  const [galleryActive, setGalleryActive] = useState(false)
  const galleryRef = useRef()

  if (edition && edition.data) {

    let title = 'Assortment'

    if (edition.data.title) {
      title += ` | ${edition.data.title}`
    }

    return (
      <DefaultLayout settings={settings}>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <div className='flex flex-wrap -mx-4'>
            <div className='px-4 w-full md:order-2 md:w-8/12 xxl:w-7/12'>
              {edition.data.gallery &&
                edition.data.gallery.map((item, index) => (
                  <ResponsiveImage
                    image={item.image}
                    sizes={{
                      mobile: 'w=353',
                      md: 'w=474',
                      xl: 'w=538',
                      full: 'w=688'
                    }}
                    pictureClass={'mb-20 ' + (index > 0 ? 'hidden md:block' : 'block')}
                    imgClass='cursor-pointer'
                    handleClick={() => {
                      setGalleryActive(true)
                      if (galleryRef.current && galleryRef.current.swiper) {
                        galleryRef.current.swiper.slideTo(index, 0)
                      }
                    }}
                    key={`gallery_item_${index}`}
                  />
                ))
              }
            </div>
            <div className='px-4 w-full md:order-1 md:w-4/12 xxl:w-5/12 mt-8 md:mt-40'>
              <h1 className='text-4xl font-heading'>{edition.data.title}</h1>
            </div>
          </div>
        </Container>
        <Gallery
          docId={edition.id}
          gallery={edition.data.gallery}
          title={edition.data.title}
          isActive={galleryActive}
          closeGallery={() => { setGalleryActive(false) }}
          ref={galleryRef}
        />
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData

  const settings = await Client().getSingle('settings') || {}

  const edition = await Client().getByUID('edition', params.uid, ref ? { ref } : null) || {}

  return {
    props: {
      settings,
      preview,
      edition,
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'edition')
  return {
    paths: documents.map(doc => `/editions/${doc.uid}`),
    fallback: true,
  }
}

export default Edition;
