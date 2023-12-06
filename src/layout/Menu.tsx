import { Link } from 'wouter'
import { useDataContext } from '../context/useDataContext'
import { mainmenu } from '../data/data'

const MenuPages = () => {
  const { lan } = useDataContext()

  return (
    <div className='mainmenu fixed top-0 left-0 px-6 lg:px-12 w-full h-screen z-40 bg-white/50 backdrop-blur'>
      <nav className='flex items-center h-full'>
        <ul className='text-5xl lg:text-8xl font-extrabold uppercase'>
          {mainmenu.map((item, index) => (
            <li key={index}>
              <Link to={item.url}>
                <a className='hover:line-through'>{item[lan].title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MenuPages
