import { Link, useLocation } from 'wouter'
import { menu } from '../data/data'
import { useDataContext } from '../context/useDataContext'

const MenuPages = () => {
  const { lan } = useDataContext()
  const [location] = useLocation()

  return (
    <nav className='hidden lg:block'>
      <ul className='flex items-center gap-x-12 2xl:gap-x-12'>
        {menu.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>
              <a
                className={`h-14 block pr-10 pt-[1.6rem] uppercase ${
                  location.slice(0, 8) === item.url.slice(0, 8)
                    ? 'bg-black text-white'
                    : 'hover:bg-black hover:text-white'
                }`}
              >
                {item[lan].title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuPages
