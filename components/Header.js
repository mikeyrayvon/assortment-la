import React from 'react'
import { default as NextLink } from 'next/link'

import { hrefResolver, linkResolver } from 'prismic-configuration'
import { headerStyles } from 'styles'

const Header = () => {
  return (
    <div>
      <h1>
        <NextLink href={'/'}>
          <a>Assortment</a>
        </NextLink>
      </h1>
    </div>
  )
}

export default Header
