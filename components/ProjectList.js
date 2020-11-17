import { useState } from 'react'

import ProjectListItem from './ProjectListItem'
import ProjectListTitles from './ProjectListTitles'
import Container from 'components/Container'

const ProjectList = ({ projects }) => {
  const [hoveredId, setHoveredId] = useState('')

  return (
    <Container>
      <div className='flex flex-wrap -mx-4'>
        {projects.map((project) => (
          <ProjectListItem project={project} key={project.id} setHoveredId={setHoveredId} />
        ))}
      </div>
      <ProjectListTitles projects={projects} hoveredId={hoveredId} />
    </Container>
  )
}

export default ProjectList
