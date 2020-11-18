import { useState } from 'react'

import NavTrigger from './NavTrigger'
import CityStatus from './CityStatus'
import HeaderNav from './HeaderNav'
import MobileNav from './MobileNav'

const Header = ({ settings, pathname }) => {
  const [navActive, setNavActive] = useState(false)

  return (
    <header className='fixed top-0 left-0 w-full z-30'>
      <MobileNav navActive={navActive} />
      <NavTrigger navActive={navActive} toggleNavActive={() => {
        if (navActive) {
          setNavActive(false)
        } else {
          setNavActive(true)
        }
      }} />
      <div className='relative'>
        <CityStatus settings={settings} />
        <HeaderNav pathname={pathname} />
      </div>
    </header>
  )
}

export default Header
