import { Link } from 'wouter'
import { menu } from '../data/data'
import { useDataContext } from '../context/useDataContext'

const MenuPages = () => {
  const { lan } = useDataContext()

  return (
    <nav className='mr-24 hidden lg:block'>
      <ul className='flex items-center gap-x-24 uppercase font-bold'>
        {menu.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>
              <a className='hover:line-through'>{item[lan].title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuPages
