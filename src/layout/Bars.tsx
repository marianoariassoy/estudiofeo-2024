const Menu = () => {
  const OpenMenu = () => {
    document.querySelector('.mainmenu').classList.toggle('active')
    document.querySelector('.nav-menu').classList.toggle('active')
  }

  return (
    <div
      className='nav-menu hover:opacity-60'
      onClick={OpenMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Menu
