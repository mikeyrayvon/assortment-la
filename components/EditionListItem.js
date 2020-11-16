import React from 'react'
import { default as NextLink } from 'next/link'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const EditionListItem = ({ edition }) => {
  if (edition && edition.data) {
    return (
        <div className='w-full sm:w-6/12 md:w-4/12 mb-12 px-4'>
          <div className='mb-4 edition-list-image-holder'>
            <NextLink
              as={linkResolver(edition)}
              href={hrefResolver(edition)}
            ><a>
              <img className='sm:h-full sm:object-cover' src={edition.data.main_image.url} />
            </a></NextLink>
          </div>
          <div className='flex'>
            <h3 className='w-8/12 text-3xl font-query'>
              <NextLink
                as={linkResolver(edition)}
                href={hrefResolver(edition)}
              ><a>{edition.data.title}</a></NextLink>
            </h3>
            <div className='w-4/12 pt-2'><span>{edition.data.attributes}</span></div>
          </div>
        </div>
    )
  }
  return null
}

export default EditionListItem
