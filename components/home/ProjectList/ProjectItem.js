import React from 'react'
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'

import { hrefResolver, linkResolver } from 'prismic-configuration'

/**
 * Project list item component
 */
const ProjectItem = ({ project }) => {
  if (project.data.main_image) {
    const title = RichText.asText(project.data.title) ? RichText.asText(project.data.title) : 'Untitled'
    return (
      <div>
        <NextLink
          as={linkResolver(project)}
          href={hrefResolver(project)}
        >
          <a>
            <img src={project.data.main_image.url} alt={title} />
          </a>
        </NextLink>
      </div>
    )
  }
  return null
}

export default ProjectItem
