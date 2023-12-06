import Layout from '../../layout'
import { HeadProvider, Title } from 'react-head'

const index = () => {
  return (
    <Layout>
      <section className='flex px-6 lg:px-12 pb-12'>
        <div className='w-1/5'></div>
        <div className='w-4/5 max-w-4xl pl-6'>
          <h1 className='text-9xl mb-3 font-extrabold'>ERROR</h1>
        </div>
      </section>

      <HeadProvider>
        <Title>FEO</Title>
      </HeadProvider>
    </Layout>
  )
}

export default index
