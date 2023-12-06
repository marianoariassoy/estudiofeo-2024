import { Forward } from '../icons/icons'
import { menu } from '../data/data'
import { useDataContext } from '../context/useDataContext'
import { HeadProvider, Title } from 'react-head'
import { Link } from 'wouter'
import Item from './Item'

const HomeSection = ({ section }) => {
  const { lan } = useDataContext()

  return (
    <section>
      <section className='lg:flex px-6 lg:px-12 pb-12 relative'>
        <div className='w-1/5'></div>
        <div className='lg:w-4/5'>
          <h1 className='text-7xl lg:text-9xl mb-3 font-extrabold uppercase'>
            {menu[section - 1][lan].title}
          </h1>
          <p className='text-wrap w-3/4 lg:w-full max-w-xl'>
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

        <Link
          to={`/${
            section < 5
              ? menu[section]['EN'].title.toLowerCase()
              : menu[0]['EN'].title.toLowerCase()
          }`}
        >
          <button className='absolute right-4 lg:right-10 bottom-12 hover:blur-sm lg:text-2xl'>
            <Forward />
          </button>
        </Link>
      </section>

      <section>
        <div>
          <Item />
        </div>
        <div className='grid grid-cols-2 '>
          <div className='aspect-square'>
            <Item />
          </div>
          <div className='aspect-square'>
            <Item />
          </div>
        </div>
        <div>
          <Item />
        </div>
        <div className='grid grid-cols-2 '>
          <div className='aspect-square'>
            <Item />
          </div>
          <div className='aspect-square'>
            <Item />
          </div>
        </div>
      </section>

      <HeadProvider>
        <Title>FEO - {menu[section - 1][lan].title}</Title>
      </HeadProvider>
    </section>
  )
}

export default HomeSection
