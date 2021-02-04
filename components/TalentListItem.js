import { default as NextLink } from 'next/link'

import TalentServices from './TalentServices'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const TalentListItem = ({ talent, setHoveredTalent, filterId }) => {
  const hasFilterId = !filterId ? true : talent.data.services.some(({service: service}) => filterId === service.id)
  return (
    <li className={'talent-list-item text-4xl sm:text-5xl md:text-7xl inline-block' + (hasFilterId ? '' : ' invisible pointer-events-none')}>
      <NextLink
        as={linkResolver(talent)}
        href={hrefResolver(talent)}
      >
        <a
          className='hover:underline font-heading'
          onMouseEnter={() => { setHoveredTalent(talent.id) }}
          onMouseLeave={() => { setHoveredTalent(false)}}>{talent.data.name}</a>
      </NextLink>
      <TalentServices services={talent.data.services} />
      <span className='comma font-heading'>,&nbsp;</span>
    </li>
  )
}

export default TalentListItem
