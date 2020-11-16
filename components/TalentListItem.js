import React from 'react'
import { default as NextLink } from 'next/link'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const TalentListItem = ({ talent, setHoveredTalent }) => {
  return (
    <li className='talent-list-item text-7xl inline-block'>
      <NextLink
        as={linkResolver(talent)}
        href={hrefResolver(talent)}
      >
        <a
          className='hover:underline font-query'
          onMouseEnter={() => { setHoveredTalent(talent.id) }}
          onMouseLeave={() => { setHoveredTalent(false)}}>{talent.data.name}</a>
      </NextLink>
      <span className='superscript'>({talent.data.roles})</span>
      <span className='talent-list-comma font-query'>,&nbsp;</span>
    </li>
  )
}

export default TalentListItem
