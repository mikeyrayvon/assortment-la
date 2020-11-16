import React from 'react'
import { default as NextLink } from 'next/link'

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Container from 'components/Container'
import Clock from 'components/Clock'
import Weather from 'components/Weather'

const Header = () => {
  return (
    <header className='pt-4'>
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
              <ul className='flex text-5xl font-query'>
                <li className='px-5'>
                  <NextLink href={'/roster'}>
                    <a className='hover:underline'>Roster</a>
                  </NextLink>
                </li>
                <li className='px-5'>
                  <NextLink href={'/editions'}>
                    <a className='hover:underline'>Editions</a>
                  </NextLink>
                </li>
                <li className='px-5'>
                  <NextLink href={'/agency'}>
                    <a className='hover:underline'>Agency</a>
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
