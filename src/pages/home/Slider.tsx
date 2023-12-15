import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from '../../components/Image'
import { Back, Forward } from '../../icons/icons'

const Slider = ({ data }) => {
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
        {data.map((item) => (
          <div
            key={item.id}
            className='aspect-square lg:aspect-video w-full'
          >
            <Image
              src={item.image}
              alt={item.alt}
            />
          </div>
        ))}
      </Slide>
    </section>
  )
}

export default Slider
