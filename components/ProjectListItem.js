import React from 'react'
import { default as NextLink } from 'next/link'
import ReactPlayer from 'react-player'

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
                mobile: 'w=353',
                md: 'w=474',
                xl: 'w=538',
                full: 'w=688'
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
