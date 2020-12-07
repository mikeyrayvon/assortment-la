import { default as NextLink } from 'next/link'

import ResponsiveImage from './ResponsiveImage'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const EditionListItem = ({ edition }) => {
  if (edition && edition.data) {
    return (
      <div className='w-full sm:w-6/12 md:w-4/12 mb-20 sm:mb-40 px-6'>
        <div className='mb-4 edition-list-image-holder'>
          {edition.data.main_image &&
            <NextLink
              as={linkResolver(edition)}
              href={hrefResolver(edition)}
            ><a>
              <ResponsiveImage
                image={edition.data.main_image}
                imgClass='sm:object-cover sm:h-full'
              />
            </a></NextLink>
          }
        </div>
        <div className='flex'>
          <h3 className='w-8/12 text-5xl font-query'>
            <NextLink
              as={linkResolver(edition)}
              href={hrefResolver(edition)}
            ><a>{edition.data.title}</a></NextLink>
          </h3>
          <div className='w-4/12 pt-6'><span>{edition.data.attributes}</span></div>
        </div>
      </div>
    )
  }
  return null
}

export default EditionListItem
