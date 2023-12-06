import Layout from '../../layout/'
import Slider from './Slider'
import { HeadProvider, Title } from 'react-head'

const index = () => {
  return (
    <Layout>
      <section>
        <div className='w-full m-auto max-w-6xl px-6 py-12'>
          <h1 className='text-8xl mb-3'>WE ARE FEO</h1>
          <p className='text-wrap'>
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
      <section>
        <Slider />
      </section>
      <HeadProvider>
        <Title>FEO</Title>
      </HeadProvider>
    </Layout>
  )
}

export default index
