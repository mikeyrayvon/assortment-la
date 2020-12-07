import EditionListItem from 'components/EditionListItem';
import Container from 'components/Container'

const EditionList = ({ editions }) => {
  if (editions) {
    return (
      <Container>
        <div className='flex flex-wrap -mx-6'>
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
