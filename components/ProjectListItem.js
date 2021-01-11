import React from 'react'
import { default as NextLink } from 'next/link'

import ResponsiveImage from './ResponsiveImage'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const ProjectListItem = ({ project, setHoveredId }) => {
  if (project.data.main_image) {
    const image = project.data.main_image
    return (
      <div className='flex justify-center items-center w-full sm:w-1/2 px-6 mb-20 sm:mb-40'>
        <NextLink
          as={linkResolver(project)}
          href={hrefResolver(project)}
        >
          <a onMouseEnter={() => { setHoveredId(project.id) }} onMouseLeave={() => { setHoveredId('') }}>
            <ResponsiveImage
              image={image}
              sizes={{
                mobile: 'w=700',
                md: 'w=900',
                xl: 'w=1100',
                full: 'w=1300'
              }}
              imgClass='project-list-image'
            />
          </a>
        </NextLink>
      </div>
    )
  }
  return null
}

export default ProjectListItem
