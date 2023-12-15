import Layout from '../layout/'
import { HeadProvider, Title } from 'react-head'

const Details = () => {
  return (
    <Layout>
      <section className='m-auto max-w-7xl px-6 lg:px-12 pb-12'>
        <h1 className='text-9xl font-extrabold'>THE FAT RONAL</h1>
        <h2 className='text-6xl mb-3 font-bold'>CHARACTER</h2>
        <p className='text-wrap w-3/4 lg:w-full max-w-4xl lg:pr-3'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor est
          deleniti consectetur sit, necessitatibus molestiae totam, tempora
          maiores perferendis explicabo et dolores minima. Eaque error fuga
          tempora saepe sapiente adipisci. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Dolor est deleniti consectetur sit,
          necessitatibus molestiae totam, tempora maiores perferendis explicabo
          et dolores minima. Eaque error fuga tempora saepe sapiente adipisci.
        </p>
      </section>

      <section>
        <img
          src='https://estudiofeo.com/backend/images/bg-home.jpg'
          className='fade-in w-full'
        />
      </section>

      <section className='m-auto max-w-7xl px-6 lg:px-12 py-12'>
        <h3 className='text-3xl font-bold mb-3'>Lorem, ipsum dolor sit amet</h3>
        <p className='text-wrap w-3/4 lg:w-full max-w-4xl lg:pr-3'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor est
          deleniti consectetur sit, necessitatibus molestiae totam, tempora
          maiores perferendis explicabo et dolores minima. Eaque error fuga
          tempora saepe sapiente adipisci. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Dolor est deleniti consectetur sit,
          necessitatibus molestiae totam, tempora maiores perferendis explicabo
          et dolores minima. Eaque error fuga tempora saepe sapiente adipisci.
        </p>
      </section>

      <HeadProvider>
        <Title>FEO</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Details
