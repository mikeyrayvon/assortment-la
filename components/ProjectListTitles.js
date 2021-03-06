import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

const ProjectListTitles = ({ projects, hoveredId }) => {
  let ball, pos, mouse
  const speed = 0.1
  const fpms = 60 / 1000

  useEffect(() => {
    gsap.set('.project-list-titles', {xPercent: 5, yPercent: -105})

    ball = document.querySelector('.project-list-titles')
    pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    mouse = { x: pos.x, y: pos.y }

    const xSet = gsap.quickSetter(ball, "x", "px")
    const ySet = gsap.quickSetter(ball, "y", "px")

    window.addEventListener('mousemove', e => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add((time, deltaTime) => {
      const delta = deltaTime * fpms;
      const dt = 1.0 - Math.pow(1.0 - speed, delta);

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    })
  }, [])

  return (
    <div className='project-list-titles fixed pointer-events-none z-40 top-0 left-0'>
      {projects.map((project) => {
        if (!project.data.title) {
          return null
        }

        return (
          <div className={(hoveredId !== project.id ? 'hidden' : 'block')} key={`project_title_${project.id}`}>
            <h3>
              <span className='font-heading text-7xl'>{project.data.title}</span> <br />
              {project.data.talent && project.data.talent.data &&
                <span className='text-5xl'>{project.data.talent.data.name}</span>
              }
            </h3>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectListTitles
