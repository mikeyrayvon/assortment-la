import React from 'react'

import { RichText } from 'prismic-reactjs';

import { hrefResolver, linkResolver } from 'prismic-configuration'

import Container from 'components/Container'

const TalentHeader = ({ talent }) => {
  return (
    <Container>
      <div className='flex flex-col items-center'>
        <div>
          <h1 className='inline-block'>{talent.data.name}</h1>
          <span className='inline-block'>({talent.data.roles})</span>
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
            <div>PDF</div>
            <div>Website</div>
          </div>
          <div>
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default TalentHeader
