import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
// import Image from '../../components/Image'
import { Back, Forward } from '../../icons/icons'

const Slider = () => {
  const sliderProperties = {
    autoplay: true,
    transitionDuration: 250,
    indicators: false,
    arrows: true,
    infinite: true,
    pauseOnHover: true,
    prevArrow: (
      <div className='hover:text-white ml-6 lg:ml-12 text-xl'>
        <Back />
      </div>
    ),
    nextArrow: (
      <div className='hover:text-white mr-6 lg:mr-12 text-xl'>
        <Forward />
      </div>
    ),
  }

  return (
    <section>
      <Slide {...sliderProperties}>
        <img
          src='https://estudiofeo.com/backend/images/bg-home.jpg'
          className='fade-in h-full w-full object-cover object-center aspect-square lg:aspect-video'
        />
        <img
          src='https://estudiofeo.com/backend/images/bg-home.jpg'
          className='fade-in h-full w-full object-cover object-center aspect-square lg:aspect-video'
        />
      </Slide>
    </section>
  )
}

export default Slider
