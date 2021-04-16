const SliderImage = ({image, sizes, wrapperClass, imgClass, handleClick, renderIcon}) => {
  if (image && image.url) {
    const imageUrl = new URL(image.url)
    const imagePath = imageUrl.origin + imageUrl.pathname + '?auto=compress,format&cs=srgb&'

    return (
      <div className={wrapperClass} onClick={() => { if (handleClick) { handleClick() } }}>
        <img className={imgClass} src={imagePath + 'w=1800'} alt={image.alt} />
        {renderIcon &&
          renderIcon()
        }
      </div>
    )
  }

  return null
}

export default SliderImage
