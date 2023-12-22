import { Link } from 'wouter'
import Image from './Image'
import { sanitizeTitleForURL } from '../utils/utils'

const Item = ({ data }) => {
  return (
    <article className='relative w-full lg:min-h-[450px] min-h-[200px] bg-slate-300'>
      <Link href={`/work/${data.id}/${sanitizeTitleForURL(data.title)}`}>
        <button className='absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur z-10 cursor-pointer opacity-0 hover:opacity-100 transition-all'></button>
      </Link>

      <div className='absolute bottom-0 left-0 w-full p-6 lg:p-12 text-white text-left z-20 reveal-on-scroll'>
        <h1 className='text-2xl lg:text-5xl font-extrabold uppercase'>
          {data.title}
        </h1>
        <h2 className='text-2xl lg:text-4xl uppercase'>{data.subtitle}</h2>
      </div>

      <Image
        src={data.image}
        alt={data.title}
      />
    </article>
  )
}

export default Item
