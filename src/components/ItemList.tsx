import Item from './Item'
import UseFetch from '../hooks/useFetch'
// import Loader from './Loader'

const ItemList = ({ lan, location }) => {
  const { data, loading } = UseFetch(`${location}/${lan}`)

  if (loading) {
    return null
  }

  return (
    <section className='grid-container'>
      {data.map((item, index) => (
        <div
          className='grid-item'
          key={index}
        >
          <Item data={item} />
        </div>
      ))}
    </section>
  )
}

export default ItemList
