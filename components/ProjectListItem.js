import React from 'react'
import { default as NextLink } from 'next/link'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const ProjectListItem = ({ project }) => {
  if (project.data.main_image) {
    return (
      <div className='w-full md:w-6/12 flex justify-center items-center'>
        <NextLink
          as={linkResolver(project)}
          href={hrefResolver(project)}
        >
          <a>
            <img src={project.data.main_image.url} alt={project.data.title} />
          </a>
        </NextLink>
      </div>
    )
  }
  return null
}

export default ProjectListItem
