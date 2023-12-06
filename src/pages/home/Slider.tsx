import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from '../../components/Image'
import { Back, Forward } from '../../icons/icons'

const Slider = () => {
  const sliderProperties = {
    autoplay: true,
    transitionDuration: 250,
    indicators: false,
    arrows: true,
    infinite: true,
    prevArrow: (
      <div className='hover:text-white ml-6 lg:ml-12 text-4xl'>
        <Back />
      </div>
    ),
    nextArrow: (
      <div className='hover:text-white mr-6 lg:mr-12 text-4xl'>
        <Forward />
      </div>
    ),
  }

  return (
    <Slide {...sliderProperties}>
      <Image
        src='https://estudiofeo.com/backend/images/bg-home.jpg'
        alt='image'
      />
      <Image
        src='https://estudiofeo.com/backend/images/bg-home.jpg'
        alt='image'
      />
    </Slide>
  )
}

export default Slider
