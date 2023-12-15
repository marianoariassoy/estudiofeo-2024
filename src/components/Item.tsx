import { Link } from 'wouter'
import Image from './Image'
import { sanitizeTitleForURL } from '../utils/utils'

const Item = ({ data }) => {
  return (
    <article className='relative w-full h-[70vh]'>
      <Link href={`/work/${data.id}/${sanitizeTitleForURL(data.title)}`}>
        <button className='absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur z-10 cursor-pointer opacity-0 hover:opacity-100 transition-all'>
          <div className='absolute bottom-0 left-0 w-full p-6 lg:p-12 text-white text-left'>
            <h1 className='text-4xl lg:text-6xl font-extrabold uppercase mb-2'>
              {data.title}
            </h1>
            <h2 className='text-5xl uppercase'> {data.subtitle}</h2>
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
