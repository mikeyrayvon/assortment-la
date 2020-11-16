import React from 'react'
import Slider from 'react-slick'

import ProjectSliderItem from './ProjectSliderItem'
import Container from 'components/Container'

const ProjectSlider = ({ project, talent }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1
  }

  if (project && project.data) {
    return (
      <Container>
        <Slider {...settings}>
          <div>
            <div className='project-slide pr-4 flex justify-center items-center'>
              <h1>
                <span className='font-query text-5xl'>{project.data.title}</span> <br />
                {talent && talent.data &&
                  <span className='text-4xl'>{talent.data.name}</span>
                }
              </h1>
            </div>
          </div>
          {project.data.image_gallery.map((item, index) => <ProjectSliderItem item={item} key={`image_gallery_${project.id}_${index}`} />)}
        </Slider>
      </Container>
    )
  }
  return null
}

export default ProjectSlider
