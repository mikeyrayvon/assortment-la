import React from 'react'

import ProjectListItem from './ProjectListItem'
import Container from 'components/Container'

/**
 * Project list component
 */
const ProjectList = ({ projects }) => {
  return (
    <Container>
      <div className='flex flex-wrap -mx-4'>
        {projects.map((project) => (
          <ProjectListItem project={project} key={project.id} />
        ))}
      </div>
    </Container>
  )
}

export default ProjectList
