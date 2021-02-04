import { useState, useEffect } from 'react'
import { default as NextLink } from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals('ScrollTrigger', ScrollTrigger)

import Container from './Container'

const HeaderNav = ({ shouldAnimate }) => {
  useEffect (()=>{
    if (shouldAnimate) {
      gsap.from('.header-nav', {
        scrollTrigger: {
          scrub: true,
          start: 0,
          end: 400
        },
        translateY: '40vh',
        transformOrigin: 'center top',
        ease: 'power1.inOut'
      });

      gsap.from('.header-logo', {
        scrollTrigger: {
          scrub: true,
          start: 100,
          end: 350
        },
        scale: 1.3,
        transformOrigin: 'center top',
        ease: 'power1.inOut'
      });

      gsap.from('.main-nav', {
        scrollTrigger: {
          scrub: true,
          start: 100,
          end: 350
        },
        scale: 2,
        transformOrigin: 'center top',
        ease: 'power1.inOut'
      });
    }
  },[shouldAnimate])

  return (
    <div className={'header-nav absolute w-full top-0 left-0 z-30 pt-4 md:pt-8'}>
      <Container>
        <div className='text-center flex flex-col items-center z-30'>
          <h1 className='pt-1 mb-4'>
            <NextLink href={'/'}>
              <img className='header-logo' src='/images/assortment-logo.svg' alt='Assortment' />
            </NextLink>
          </h1>
          <nav className='main-nav hidden md:block'>
            <ul className='flex text-5xl font-heading'>
              <li className='nav-item px-2'>
                <NextLink href={'/roster'}>
                  <a className='relative'>Roster</a>
                </NextLink>
                <span className='pointer-events-none'>,</span>
              </li>
              <li className='nav-item px-2'>
                <NextLink href={'/editions'}>
                  <a className='relative'>Editions</a>
                </NextLink>
                <span className='pointer-events-none'>,</span>
              </li>
              <li className='nav-item px-2'>
                <NextLink href={'/agency'}>
                  <a className='relative'>Agency</a>
                </NextLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  )
}

export default HeaderNav
