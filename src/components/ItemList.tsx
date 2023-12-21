import Item from './Item'
import UseFetch from '../hooks/useFetch'

const ItemList = ({ lan, location }) => {
  const { data, loading } = UseFetch(`${location}/${lan}`)

  if (loading) {
    return null
  }

  return (
    <section className='flex flex-col'>
      {data.map((item, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <Item data={item} />
          ) : (
            <div className='flex items-stretch'>
              <Item data={item} />
              {index + 1 < data.length && <Item data={data[index + 1]} />}
            </div>
          )}
        </div>
      ))}
    </section>
  )
}

export default ItemList
