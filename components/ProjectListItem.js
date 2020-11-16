import React from 'react'
import { default as NextLink } from 'next/link'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const ProjectListItem = ({ project }) => {
  if (project.data.main_image) {
    return (
      <div className='flex justify-center items-center w-full sm:w-1/2 px-4'>
        <NextLink
          as={linkResolver(project)}
          href={hrefResolver(project)}
        >
          <a>
            <img className='project-list-image object-contain' src={project.data.main_image.url} alt={project.data.title} />
          </a>
        </NextLink>
      </div>
    )
  }
  return null
}

export default ProjectListItem
