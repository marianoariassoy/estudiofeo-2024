import { useEffect, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

const ImageComponent = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <div className='h-full w-full flex justify-center items-center py-32'>
      <BeatLoader />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className='fade-in h-full w-full object-cover object-center'
    />
  )
}

export default ImageComponent
