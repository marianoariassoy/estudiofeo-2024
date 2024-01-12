import Item from './Item'
import UseFetch from '../hooks/useFetch'

const ItemList = ({ lan, location }) => {
  const { data, loading } = UseFetch(`${location}/${lan}`)

  if (loading) {
    return null
  }

  return (
    <section className='projects-grid'>
      {data.map((item, index) => (
        <Item
          data={item}
          key={index}
        />
      ))}
    </section>
  )
}

export default ItemList
