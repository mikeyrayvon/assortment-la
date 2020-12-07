import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { GrDocument, GrLink, GrInstagram } from 'react-icons/gr'
import { RichText } from 'prismic-reactjs';

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Container from 'components/Container'
import TalentServices from './TalentServices'

const TalentHeader = ({ talent }) => {
  if (talent && talent.data) {
    return (
      <section className='mb-40'>
        <Container>
          <div className='flex flex-col items-center mb-40'>
            <div className='mb-4'>
              <span className='text-5xl sm:text-6xl md:text-7xl'>
                <h1 className='inline font-query'>{talent.data.name}</h1>
                <TalentServices services={talent.data.services} talentId={talent.id} />
              </span>
            </div>
            <div><span>{talent.data.city}</span></div>
          </div>
          <div className='flex -mx-6'>
            <div className='md:w-6/12 px-6'>
              <img src={talent.data.main_image.url} alt='' />
            </div>
            <div className='md:w-6/12 px-6'>
              <div className='mb-12'>
                {RichText.render(talent.data.bio, linkResolver)}
              </div>
              <div className='flex flex-wrap'>
                {talent.data.pdf.url &&
                  <div className='pl-12 w-1/2 mb-12'>
                    <a className='hover:underline flex' href={talent.data.pdf.url}>
                      <GrDocument className='flex-shrink-0 stroke-black w-12 h-12 p-2 inline-block mr-8' />
                      <span>Download {talent.data.name}'s PDF</span>
                    </a>
                  </div>
                }
                {talent.data.website.url &&
                  <div className='pl-12 w-1/2 mb-12'>
                    <a className='hover:underline flex' href={talent.data.website.url}>
                      <GrLink className='flex-shrink-0 stroke-black w-12 h-12 p-2 inline-block mr-8' />
                      <span>Personal Website</span>
                    </a>
                  </div>
                }
                {talent.data.instagram &&
                  <div className='pl-12 w-1/2 mb-12'>
                    <a className='hover:underline flex' href={`https://instagram.com/${talent.data.instagram}`}>
                      <FaInstagram className='flex-shrink-0 bg-black text-white w-12 h-12 p-2 rounded-full inline-block mr-8' />
                      <span>@{talent.data.instagram}</span>
                    </a>
                  </div>
                }
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return null
}

export default TalentHeader
