import { Link, useLocation } from 'wouter'
import { useDataContext } from '../context/useDataContext'
import { mainmenu, menu } from '../data/data'

const MenuPages = () => {
  const { lan } = useDataContext()
  const [location] = useLocation()

  return (
    <div className='mainmenu fixed top-0 left-0 w-full h-screen z-40 bg-white/50 backdrop-blur flex px-6 lg:px-12'>
      <div className='lg:w-1/5'></div>
      <div className='w-full lg:w-4/5'>
        <nav className='flex flex-col justify-center h-full'>
          <ul className='text-6xl lg:text-9xl font-extrabold uppercase border-b pb-3 mb-3 border-black lg:hidden'>
            {menu.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>
                  <a
                    className={`${
                      location.slice(0, 4) === item.url.slice(0, 4)
                        ? ''
                        : 'blur-sm'
                    }`}
                  >
                    {item[lan].title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className='text-6xl lg:text-9xl font-extrabold uppercase'>
            {mainmenu.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>
                  <a
                    className={`${
                      location.slice(0, 4) === item.url.slice(0, 4)
                        ? 'blur-sm '
                        : 'blur-0 hover:blur-sm'
                    }`}
                  >
                    {item[lan].title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MenuPages
