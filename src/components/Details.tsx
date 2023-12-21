import { HeadProvider, Title } from 'react-head'
import { useParams } from 'wouter'
import ReactPlayer from 'react-player'
import Layout from '../layout/'
import Image from './Image'
import useFetch from '../hooks/useFetch'
import { useDataContext } from '../context/useDataContext'
import Loader from '../components/Loader'

const Details = () => {
  const { lan } = useDataContext()
  const { id } = useParams()
  const { data, loading } = useFetch(`/post/${lan}/${id}`)
  console.log(data)
  const { data: dataImages, loading: loadingImages } = useFetch(
    `/images/${id}/${lan}`,
  )

  return (
    <Layout>
      <section className='m-auto max-w-7xl px-6 lg:px-12 pb-28'>
        {loading ? (
          <Loader />
        ) : (
          <>
            <h1 className='text-4xl lg:text-8xl font-bold'>{data[0].title}</h1>
            {data[0].subtitle && (
              <h2 className='text-4xl lg:text-6xl font-bold mb-3'>
                {data[0].subtitle}
              </h2>
            )}
          </>
        )}
      </section>

      {!loading && data[0].video && (
        <section className='w-full mb-28'>
          <ReactPlayer
            url={data[0].video}
            playing={true}
            controls={true}
            width='100%'
            height='100%'
            className='aspect-video object-cover'
          />
        </section>
      )}

      <section className='flex flex-col'>
        {loadingImages ? (
          <Loader />
        ) : (
          dataImages.map((item) => (
            <article key={item.id}>
              <Image
                src={item.image}
                alt={item.title}
              />
              {item.text && (
                <div className='py-12 whitespace-pre px-6 lg:px-12'>
                  {item.text}
                </div>
              )}
            </article>
          ))
        )}
      </section>

      {!loading && data[0].link && (
        <div className='my-12 px-6 lg:px-12'>
          <a
            href={data[0].link}
            target='_blank'
            rel='noreferrer'
            className='bg-black rounded-full px-6 py-3 inline-flex text-white hover:bg-black/80'
          >
            {lan === 'ES' ? 'Ir al link' : 'View Link'}
          </a>
        </div>
      )}

      <HeadProvider>
        <Title>FEO</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Details
