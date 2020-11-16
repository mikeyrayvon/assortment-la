import React from 'react'

const EditionListItem = ({ edition }) => {
  if (edition && edition.data) {
    return (
      <div className='w-full sm:w-6/12 md:w-4/12'>
        <div><img src={edition.data.main_image.url} /></div>
        <div className='flex'>
          <h3 className='w-8/12'>{edition.data.title}</h3>
          <div className='w-4/12'><span>{edition.data.attributes}</span></div>
        </div>
      </div>
    )
  }
  return null
}

export default EditionListItem
