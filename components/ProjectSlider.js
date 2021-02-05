import { useState, useRef } from 'react'
import SwiperCore, { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { default as NextLink } from 'next/link'

SwiperCore.use([Mousewheel])

import { hrefResolver, linkResolver } from 'prismic-configuration'

import ProjectSliderItem from './ProjectSliderItem'
import Container from './Container'
import Gallery from './Gallery'

const ProjectSlider = ({ project, talent, showTalentName }) => {
  const [galleryActive, setGalleryActive] = useState(false)
  const galleryRef = useRef()

  const params = {
    spaceBetween: 120,
    slidesPerView: 'auto',
    centeredSlides: false,
    loop: false,
    mousewheel: {
      forceToAxis: true,
      preventSwipeThresholdDelta: 120,
      preventSwipeThresholdTime: 3000,
      invert: false
    },
    slideToClickedSlide: true,
    freeMode: true,
    preloadImages: true,
    updateOnImagesReady: true
  }

  if (project && project.data) {
    return (
      <div>
        <div className='project-slider'>
          <Container>
            <Swiper {...params}>
              <SwiperSlide>
                <h2>
                  <span className='font-heading text-5xl'>{project.data.title}</span> <br />
                  {talent && talent.data && showTalentName &&
                    <NextLink
                      as={linkResolver(talent)}
                      href={hrefResolver(talent)}
                    ><a className='text-4xl cursor-pointer'>{talent.data.name}</a></NextLink>
                  }
                </h2>
              </SwiperSlide>
              {project.data.image_gallery.map((item, index) => (
                <SwiperSlide key={`project_gallery_${project.id}_${index}`}>
                  <ProjectSliderItem
                    item={item}
                    openGallery={() => {
                      setGalleryActive(true)
                      if (galleryRef.current && galleryRef.current.swiper) {
                        galleryRef.current.swiper.slideTo(index, 0)
                      }
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </div>
        <Gallery
          docId={project.id}
          gallery={project.data.image_gallery}
          title={project.data.title}
          subtitle={project.data.subtitle}
          talentName={talent && talent.data ? talent.data.name : null}
          isActive={galleryActive}
          closeGallery={() => { setGalleryActive(false) }}
          ref={galleryRef}
        />
      </div>
    )
  }
  return null
}

export default ProjectSlider
