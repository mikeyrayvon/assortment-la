const SectionHeader = ({ title, classes })=> {
  return (
    <div className='container mx-auto border-t'>
      {title &&
        <h2>{title}</h2>
      }
    </div>
  )
}

export default SectionHeader
