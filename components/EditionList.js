import React from 'react'

import EditionListItem from 'components/EditionListItem';
import Container from 'components/Container'

const EditionList = ({ editions }) => {
  if (editions) {
    return (
      <Container>
        <div className='flex space-x-8'>
          {editions.map(edition => (
            <EditionListItem edition={edition} key={edition.id} />
          ))}
        </div>
      </Container>
    )
  }
  return null
}

export default EditionList
