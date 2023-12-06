import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Sponsors from './Sponsors'

const Layout = ({ children }) => {
  return (
    <>
      <header className='sticky z-50 bg-white/50 backdrop-blur px-6 lg:px-12 py-12'>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Sponsors />
        <Footer />
      </footer>
      <Menu />
    </>
  )
}

export default Layout
