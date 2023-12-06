import { Link } from 'wouter'
import { Logo } from '../icons/icons'
import Bars from './Bars'
import Languages from './Languages'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center gap-x-6'>
      <div>
        <Link href='/'>
          <a
            aria-label='Go to home page'
            className='hover:blur-sm'
          >
            <Logo />
          </a>
        </Link>
      </div>
      <div className='flex items-center gap-x-6'>
        <Nav />
        <Languages />
        <Bars />
      </div>
    </div>
  )
}

export default Header
