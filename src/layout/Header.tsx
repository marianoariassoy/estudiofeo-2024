import { Link } from 'wouter'
import { Logo } from '../icons/icons'
import Bars from './Bars'
import Languages from './Languages'
import Nav from './Nav'

const Header = () => {
  return (
    <section className='flex px-6 lg:px-12 bg-white/50 backdrop-blur-md pb-6 mb-10'>
      <div className='w-1/5 pt-6'>
        <Link href='/'>
          <a className='hover:blur-sm inline-block'>
            <Logo />
          </a>
        </Link>
      </div>
      <div className='flex justify-between items-start w-4/5'>
        <div>
          <Nav />
        </div>
        <div className='flex items-center gap-x-6 pt-6'>
          <Languages />
          <Bars />
        </div>
      </div>
    </section>
  )
}

export default Header
