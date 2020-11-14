import React from 'react'
import ProjectItem from './ProjectItem'

/**
 * Project list component
 */
const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </div>
  )
}

export default ProjectList
