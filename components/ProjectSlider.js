import { useState } from 'react'
import SwiperCore, { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Mousewheel])

import ProjectSliderItem from './ProjectSliderItem'
import Container from './Container'
import Gallery from './Gallery'

const ProjectSlider = ({ project, talent }) => {
  const [galleryActive, setGalleryActive] = useState(false)

  const params = {
    spaceBetween: 48,
    slidesPerView: 'auto',
    centeredSlides: false,
    mousewheel: {
      forceToAxis: true,
      preventSwipeThresholdDelta: 120,
      preventSwipeThresholdTime: 3000,
      invert: true
    },
    slideToClickedSlide: true,
  }

  if (project && project.data) {
    return (
      <section className='project-slider'>
        <Container>
          <Swiper {...params}>
            <SwiperSlide>
              <h1>
                <span className='font-query text-5xl'>{project.data.title}</span> <br />
                {talent && talent.data &&
                  <span className='text-4xl'>{talent.data.name}</span>
                }
              </h1>
            </SwiperSlide>
            {project.data.image_gallery.map((item, index) => (
              <SwiperSlide key={`image_gallery_${project.id}_${index}`}>
                <ProjectSliderItem item={item} openGallery={() => { setGalleryActive(true) }}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
        <Gallery
          docId={project.id}
          gallery={project.data.image_gallery}
          isActive={galleryActive}
          closeGallery={() => { setGalleryActive(false) }}
        />
      </section>
    )
  }
  return null
}

export default ProjectSlider
