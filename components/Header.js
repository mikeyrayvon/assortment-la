import React from 'react'
import { default as NextLink } from 'next/link'

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Container from 'components/Container'
import Clock from 'components/Clock'
import Weather from 'components/Weather'

const Header = () => {
  return (
    <header>
      <Container>
        <div className='flex justify-between'>
          <div className='w-4/12'>
            <Clock />
          </div>
          <div className='w-4/12 text-center flex flex-col items-center'>
            <h1>
              <NextLink href={'/'}>
                <a className='uppercase text-2xl'>Assortment</a>
              </NextLink>
            </h1>
            <nav>
              <ul className='flex text-3xl'>
                <li className='px-5'>
                  <NextLink href={'/roster'}>
                    <a>Roster</a>
                  </NextLink>
                </li>
                <li className='px-5'>
                  <NextLink href={'/editions'}>
                    <a>Editions</a>
                  </NextLink>
                </li>
                <li className='px-5'>
                  <NextLink href={'/agency'}>
                    <a>Agency</a>
                  </NextLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className='w-4/12 text-right'>
            <Weather />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
