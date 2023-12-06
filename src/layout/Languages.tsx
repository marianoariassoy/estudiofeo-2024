import { useDataContext } from '../context/useDataContext'

const Languages = () => {
  const { lan, setLan } = useDataContext()

  const changeLanguage = () => {
    setLan(lan === 'ES' ? 'EN' : 'ES')
  }

  return (
    <button
      onClick={changeLanguage}
      className='cursor-pointer font-bold hover:opacity-60'
    >
      {lan === 'ES' ? 'EN' : 'ES'}
    </button>
  )
}

export default Languages
