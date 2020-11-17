import { default as NextLink } from 'next/link'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const TalentListItem = ({ talent, setHoveredTalent, filterId }) => {
  const hasFilterId = !filterId ? true : talent.data.services.some(({service: service}) => filterId === service.id)
  return (
    <li className={'talent-list-item text-7xl inline-block' + (hasFilterId ? '' : ' invisible pointer-events-none')}>
      <NextLink
        as={linkResolver(talent)}
        href={hrefResolver(talent)}
      >
        <a
          className='hover:underline font-query'
          onMouseEnter={() => { setHoveredTalent(talent.id) }}
          onMouseLeave={() => { setHoveredTalent(false)}}>{talent.data.name}</a>
      </NextLink>
      {talent.data.services.length > 0 &&
        <span className='superscript'>
          ({talent.data.services.map(({service: service}) => {
            return (
              <span className='talent-service' key={`talent_${talent.id}_service_${service.id}`}>
                <span>{service.data.title}</span>
                <span className='comma'>,&nbsp;</span>
              </span>
            )
          })})
        </span>
      }
      <span className='comma font-query'>,&nbsp;</span>
    </li>
  )
}

export default TalentListItem
