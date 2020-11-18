import { default as NextLink } from 'next/link'

const MobileNav = ({ navActive }) => {
  return (
    <div className={'mobile-nav fixed inset-0 z-0 bg-white flex justify-center items-center text-center' + (navActive ? ' nav-active' : '')}>
      <nav>
        <ul className='text-6xl font-query'>
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
  )
}

export default MobileNav
