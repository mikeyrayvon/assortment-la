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
    spaceBetween: 0,
    slidesPerView: 'auto',
    centeredSlides: false,
    mousewheel: {
      forceToAxis: true,
      preventSwipeThresholdDelta: 120,
      preventSwipeThresholdTime: 3000
    },
    slideToClickedSlide: true,
  }

  if (project && project.data) {
    return (
      <>
        <Container>
          <Swiper {...params}>
            <SwiperSlide>
              <div className='project-slide pr-12 flex items-center w-auto'>
                <h1>
                  <span className='font-query text-5xl'>{project.data.title}</span> <br />
                  {talent && talent.data &&
                    <span className='text-4xl'>{talent.data.name}</span>
                  }
                </h1>
              </div>
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
      </>
    )
  }
  return null
}

export default ProjectSlider
