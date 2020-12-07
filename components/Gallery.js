import { forwardRef } from 'react'
import SwiperCore, { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CgMinimizeAlt, CgArrowRight, CgArrowLeft } from 'react-icons/cg'

SwiperCore.use([Mousewheel])

import ResponsiveImage from './ResponsiveImage'

const Gallery = forwardRef((props, ref) => {
  const { docId, gallery, isActive, closeGallery } = props

  const params = {
    centeredSlides: true,
    loop: false,
    mousewheel: {
      forceToAxis: true,
      invert: false,
      sensitivity: .01
    },
    slideToClickedSlide: true
  }

  return (
    <div className={'gallery fixed bg-white inset-0 z-50 flex items-center transition-opacity' + (isActive ? '' : ' opacity-0 pointer-events-none')}>
      <Swiper
        {...params}
        ref={ref}
      >
        {gallery.map((item, index) => {
          return (
            <SwiperSlide key={`gallery_${docId}_slide_${index}`}>
              <ResponsiveImage
                image={item.image}
                sizes={{
                  mobile: 'w=353',
                  md: 'w=474',
                  xl: 'w=538',
                  full: 'w=688'
                }}
                pictureClass='gallery-picture'
                imgClass='gallery-image'
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className='absolute top-0 right-0 p-12 cursor-pointer z-10 text-4xl fill-gray-dark' onClick={() => {
        closeGallery()
      }}><CgMinimizeAlt /></div>
    </div>
  )
})

export default Gallery
