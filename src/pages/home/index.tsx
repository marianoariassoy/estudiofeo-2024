import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/'
import Slider from './Slider'
import { useDataContext } from '../../context/useDataContext'
import UseFetch from '../../hooks/useFetch'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = UseFetch(`/home`)
  const { data: presentaciones, loading: loadingPresentaciones } = UseFetch(
    `/presentaciones/${lan}`,
  )

  return (
    <Layout>
      <section className='lg:flex px-6 lg:px-12 pb-28'>
        <div className='w-1/5'></div>
        {!loadingPresentaciones && (
          <div className='lg:w-4/5'>
            <h1 className='text-9xl font-bold uppercase -mb-6'>
              {presentaciones[0].title}
            </h1>
            <p className='text-justify w-full leading-5 pr-24'>
              {presentaciones[0].text}
            </p>
          </div>
        )}
      </section>

      {!loading && <Slider data={data} />}

      <HeadProvider>
        <Title>FEO</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
