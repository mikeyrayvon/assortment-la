import React from 'react'

import { RichText } from 'prismic-reactjs';

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Container from 'components/Container'
import TalentServices from './TalentServices'

const TalentHeader = ({ talent }) => {
  if (talent && talent.data) {
    console.log(talent.data)
    return (
      <Container>
        <div className='flex flex-col items-center'>
          <div>
            <span className='text-5xl sm:text-6xl md:text-7xl'>
              <h1 className='inline font-query'>{talent.data.name}</h1>
              <TalentServices services={talent.data.services} talentId={talent.id} />
            </span>
          </div>
          <div><span>{talent.data.city}</span></div>
        </div>
        <div className='flex space-x-8'>
          <div className='md:w-6/12'>
            <img src={talent.data.main_image.url} alt='' />
          </div>
          <div className='md:w-6/12'>
            <div>
              {RichText.render(talent.data.bio, linkResolver)}
            </div>
            <div className='flex'>
              {talent.data.pdf.url &&
                <div><a href={talent.data.pdf.url}>PDF</a></div>
              }
              {talent.data.website.url &&
                <div><a href={talent.data.website.url}>Website</a></div>
              }
            </div>
            {talent.data.instagram &&
              <div>
                <a href={`https://instagram.com/${talent.data.instagram}`}>Instagram</a>
              </div>
            }
          </div>
        </div>
      </Container>
    )
  }

  return null
}

export default TalentHeader
