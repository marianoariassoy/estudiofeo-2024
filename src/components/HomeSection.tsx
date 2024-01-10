import { HeadProvider, Title } from 'react-head'
import { Link, useLocation } from 'wouter'
import { Forward } from '../icons/icons'
import { menu } from '../data/data'
import { useDataContext } from '../context/useDataContext'
import UseFetch from '../hooks/useFetch'
import Loader from './Loader'
import ItemList from './ItemList'

const HomeSection = ({ section }) => {
  const { lan } = useDataContext()
  const [location] = useLocation()
  const { data, loading } = UseFetch(`/presentaciones/${lan}`)
  let title
  let text

  if (loading) return <Loader />

  if (location === '/projects') {
    title = data[1].title
    text = data[1].text
  } else if (location === '/furniture') {
    title = data[2].title
    text = data[2].text
  } else if (location === '/art') {
    title = data[3].title
    text = data[3].text
  } else if (location === '/store') {
    title = data[4].title
    text = data[4].text
  } else if (location === '/gallery') {
    title = data[5].title
    text = data[5].text
  } else {
    title = data[1].title
    text = data[1].text
  }

  return (
    <section>
      <section className='lg:flex px-6 lg:px-12 pb-28 relative'>
        <div className='w-1/5'></div>
        <div className='lg:w-4/5'>
          <h1 className='text-7xl lg:text-9xl font-bold uppercase -mb-3 lg:-mb-6'>
            {title}
          </h1>
          <p className='text-justify w-full pr-24 leading-5'>{text}</p>
        </div>

        <Link
          to={`/${
            section < 5
              ? menu[section]['EN'].title.toLowerCase()
              : menu[0]['EN'].title.toLowerCase()
          }`}
        >
          <button className='absolute right-4 lg:right-10 bottom-8 hover:text-black/50 lg:text-xl'>
            <Forward />
          </button>
        </Link>
      </section>

      <ItemList
        lan={lan}
        location={location}
      />

      <HeadProvider>
        <Title>FEO - {title}</Title>
      </HeadProvider>
    </section>
  )
}

export default HomeSection
