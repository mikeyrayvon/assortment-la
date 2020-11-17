import { default as NextLink } from 'next/link'

import Container from 'components/Container'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const EditionFeaturedItem = ({ edition }) => {
  if (edition && edition.data) {
    return (
      <Container>
        <div className='flex flex-wrap -mx-4 sm:block sm:mx-0'>
          <div className='w-full mb-20 sm:mb-40 px-4 sm:w-auto sm:flex sm:-mx-4 sm:px-0'>
            <div className='edition-list-image-holder sm:order-2 sm:w-8/12 sm:px-4'>
              <NextLink
                as={linkResolver(edition)}
                href={hrefResolver(edition)}
              ><a>
                <img className='sm:h-full sm:object-cover sm:w-full' src={edition.data.main_image.url} />
              </a></NextLink>
            </div>
            <div className='flex sm:order-1 sm:w-4/12 sm:px-4 sm:justify-center sm:flex-col'>
              <h3 className='w-8/12 text-5xl font-query w-9/12'>
                <NextLink
                  as={linkResolver(edition)}
                  href={hrefResolver(edition)}
                ><a>{edition.data.title}</a></NextLink>
              </h3>
              <div className='w-4/12 pt-6 sm:w-1/2 sm:self-end'><span>{edition.data.attributes}</span></div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  return null
}

export default EditionFeaturedItem
