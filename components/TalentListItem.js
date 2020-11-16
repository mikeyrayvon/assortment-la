import React from 'react'
import { default as NextLink } from 'next/link'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const TalentListItem = ({ talent, setHoveredTalent }) => {
  return (
    <li className='talent-list-item text-5xl'>
      <NextLink
        as={linkResolver(talent)}
        href={hrefResolver(talent)}
      >
        <a
          onMouseEnter={() => { setHoveredTalent(talent.id) }} 
          onMouseLeave={() => { setHoveredTalent(false)}}>{talent.data.name}</a>
      </NextLink>
      <span className='superscript'>({talent.data.roles})</span>
      <span className='talent-list-comma'>, </span>
    </li>
  )
}

export default TalentListItem
