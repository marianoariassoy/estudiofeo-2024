import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Sponsors from './Sponsors'

const Layout = ({ children }) => {
  return (
    <>
      <header className='sticky top-0 z-50'>
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
