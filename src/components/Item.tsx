import { Link, useLocation } from 'wouter'
import Image from './Image'
import { sanitizeTitleForURL } from '../utils/utils'

const Item = ({ data }) => {
  const [location] = useLocation()

  return (
    <article className='relative'>
      <Link
        href={`${location}/${data.id}/${
          data.title ? sanitizeTitleForURL(data.title) : 'none'
        }`}
      >
        <button className='absolute top-0 bottom-0 left-0 w-full z-10 cursor-pointer text-white hover:text-black'>
          <div className='absolute bottom-0 left-0 w-full p-6 lg:p-12 text-left z-20 reveal-on-scroll'>
            <h1 className='text-2xl lg:text-5xl font-extrabold uppercase'>
              {data.title}
            </h1>
            <h2 className='lg:text-xl uppercase'>{data.subtitle}</h2>
          </div>
        </button>
      </Link>

      <Image
        src={data.image}
        alt={data.title}
      />
    </article>
  )
}

export default Item
