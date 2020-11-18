const GalleryItem = ({ item }) => {
  return (
    <figure>
      <picture>
        <img src={item.image.url} />
      </picture>
    </figure>
  )
}

export default GalleryItem
