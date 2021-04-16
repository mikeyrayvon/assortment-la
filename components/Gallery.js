import { forwardRef, useState } from 'react'
import SwiperCore, { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CgCompressRight, CgArrowRight, CgArrowLeft } from 'react-icons/cg'
import ReactPlayer from 'react-player'

SwiperCore.use([Mousewheel])

import SliderImage from './SliderImage'
import Container from './Container'

const Gallery = forwardRef((props, ref) => {
  const { docId, gallery, title, subtitle, talentName, isActive, closeGallery } = props

  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const params = {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: false,
    mousewheel: {
      forceToAxis: true,
      invert: false,
      sensitivity: .01
    },
    slideToClickedSlide: true
  }



  return (
    <div className={'gallery fixed bg-white inset-0 z-40 flex items-center transition-opacity' + (isActive ? '' : ' opacity-0 pointer-events-none')}>
      <Swiper
        {...params}
        ref={ref}
        onSlideChange={(swiper) => {
          setIsEnd(swiper.isEnd)
          setIsBeginning(swiper.isBeginning)
          setActiveIndex(swiper.activeIndex)
        }}
      >
        {gallery.map((item, index) => {
          return (
            <SwiperSlide
              key={`gallery_${docId}_slide_${index}`}
              className='flex justify-center items-center transition-opacity w-100vw h-100vw sm:h-70vw sm:w-70vw'
            >
              {item.video ? (
                <ReactPlayer
                  url={item.video}
                  playing={activeIndex === index && isActive}
                  width='60vw'
                  height={((60 / 16) * 9) + 'vw'}
                />
              ) : (
                <SliderImage
                  image={item.image}
                  imgClass='w-full h-full object-fill'
                  wrapperClass='w-full h-full px-4 sm:px-10 md:px-24'
                />
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>

      {gallery.length > 1 &&
        <div onClick={() => {
          if (ref.current && ref.current.swiper) {
            ref.current.swiper.slidePrev()
          }
        }} className={'hidden absolute top-0 left-0 bottom-0 z-30 w-1/3 text-6xl fill-black p-12 justify-start items-center bg-transparent cursor-pointer opacity-0' + (isBeginning ? '' : ' sm:flex hover:opacity-100')}><CgArrowLeft /></div>
      }

      {gallery.length > 1 &&
        <div onClick={() => {
          if (ref.current && ref.current.swiper) {
            ref.current.swiper.slideNext()
          }
        }} className={'hidden absolute top-0 right-0 bottom-0 z-30 w-1/3 text-6xl fill-black p-12 justify-end items-center bg-transparent cursor-pointer opacity-0' + (isEnd ? '' : ' sm:flex hover:opacity-100')}><CgArrowRight /></div>
      }

      <div className='absolute top-0 right-0 p-4 m-4 cursor-pointer z-50 text-4xl fill-gray-dark' onClick={() => {
        closeGallery()
      }}><CgCompressRight /></div>

      <div className='z-50 absolute bottom-3 left-12'>
        <div className='mb-4'>
          <span className='font-heading text-xl'>{talentName}</span>
        </div>
        <div className='mb-2 flex items-center justify-start'>
          {title &&
            <span>{title}</span>
          }
          {title && gallery[activeIndex].caption && gallery[activeIndex].caption.length > 0 &&
            <img className='w-1 h-1 mx-6' src='/images/dot.svg' />
          }
          {gallery[activeIndex].caption && gallery[activeIndex].caption.length > 0 &&
            <span>{gallery[activeIndex].caption}</span>
          }
        </div>
        <div className='w-full sm:w-auto text-xs text-gray-dark'>&copy; {new Date().getFullYear()} Assorment. All rights reserved.</div>
      </div>
    </div>
  )
})

export default Gallery
