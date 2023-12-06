import Layout from '../../layout/'
import Slider from './Slider'
import { HeadProvider, Title } from 'react-head'

const index = () => {
  return (
    <Layout>
      <section className='lg:flex px-6 lg:px-12 pb-12'>
        <div className='w-1/5'></div>
        <div className='lg:w-4/5'>
          <h1 className='text-9xl mb-3 font-extrabold'>WE ARE FEO</h1>
          <p className='text-wrap lg:max-w-4xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor est
            deleniti consectetur sit, necessitatibus molestiae totam, tempora
            maiores perferendis explicabo et dolores minima. Eaque error fuga
            tempora saepe sapiente adipisci. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Dolor est deleniti consectetur sit,
            necessitatibus molestiae totam, tempora maiores perferendis
            explicabo et dolores minima. Eaque error fuga tempora saepe sapiente
            adipisci.
          </p>
        </div>
      </section>

      <Slider />

      <HeadProvider>
        <Title>FEO</Title>
      </HeadProvider>
    </Layout>
  )
}

export default index
