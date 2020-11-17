import { useState, useEffect } from 'react'
import { default as NextLink } from 'next/link'

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Container from 'components/Container'

const Header = ({ settings }) => {
  const [topPos, setTopPos] = useState(0)
  const [scale, setScale] = useState(2)
  let headerTop

  useEffect (()=>{
    let header = document.querySelector('header');
    let rect = header.getBoundingClientRect();
    let headerTop = rect.top

    document.addEventListener('scroll', e => {
      let scrollTop = document.scrollingElement.scrollTop
      setTopPos(scrollTop)
      let newScale = ((((scrollTop - headerTop) * -1) / headerTop) + 1)
      console.log(newScale)
      setScale(newScale)
    })
  },[])

  return (
    <header className='fixed w-full top-0 left-0 z-30 pt-8' style={{
      //marginTop: '40vh'
    }}>
      <Container>
        <div className='text-center flex flex-col items-center z-30'>
          <h1>
            <NextLink href={'/'}>
              <a className='uppercase text-2xl'><img className='header-logo' src='/images/assortment-logo.svg' /></a>
            </NextLink>
          </h1>
          <nav style={{
            //transform: 'scale(' + scale + ')', transformOrigin: 'center top'
          }}>
            <ul className='flex text-5xl font-query'>
              <li className='px-2'>
                <NextLink href={'/roster'}>
                  <a className='hover:underline'>Roster</a>
                </NextLink>
                <span className='pointer-events-none'>,</span>
              </li>
              <li className='px-2'>
                <NextLink href={'/editions'}>
                  <a className='hover:underline'>Editions</a>
                </NextLink>
                <span className='pointer-events-none'>,</span>
              </li>
              <li className='px-2'>
                <NextLink href={'/agency'}>
                  <a className='hover:underline'>Agency</a>
                </NextLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
