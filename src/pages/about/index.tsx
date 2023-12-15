import { HeadProvider, Title } from 'react-head'
import Layout from '../../layout/'
import { useDataContext } from '../../context/useDataContext'
import UseFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Image from '../../components/Image'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = UseFetch(`/images/77/${lan}`)

  return (
    <Layout>
      <section className='flex flex-col gap-y-12 px-6 lg:px-12'>
        {loading ? (
          <Loader />
        ) : (
          data.map((item) => (
            <article key={item.id}>
              <Image
                src={item.image}
                alt={item.title}
              />
              {item.text && (
                <div className='pt-10 whitespace-pre'>{item.text}</div>
              )}
            </article>
          ))
        )}
      </section>

      <HeadProvider>
        <Title>FEO - About</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
