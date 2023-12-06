import Image from './Image'

const Item = () => {
  return (
    <article className='relative w-full h-full'>
      <button className='absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur z-10 cursor-pointer opacity-0 hover:opacity-100 transition-all'>
        <div className='absolute bottom-0 left-0 w-full p-6 lg:p-12 text-white text-left'>
          <h1 className='text-4xl lg:text-6xl font-extrabold uppercase mb-2'>
            LA CABRA Y EL YETI
          </h1>
          <h2 className='text-2xl'>Lorem ipsum dolor sit amet consectetur</h2>
        </div>
      </button>
      <Image
        src='https://estudiofeo.com/backend/images/bg-home.jpg'
        alt='Image'
      />
    </article>
  )
}

export default Item
