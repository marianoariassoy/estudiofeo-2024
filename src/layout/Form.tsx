import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'
import { contact } from '../data/data'
import { useDataContext } from '../context/useDataContext'

const Form = () => {
  const { lan } = useDataContext()
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const Error = () => {
    return <div className='font-bold'>{contact[lan].required}</div>
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setSending(true)
    const sender = {
      to: 'estudio.feo@gmail.com',
      from: 'no-reply@estudiofeo.com',
      from_name: 'Estudio Feo',
      subject: 'Contacto',
    }

    axios
      .post('https://estudiofeo.com/backend/send-email.php', {
        ...data,
        ...sender,
      })
      .then((data) => {
        if (data.data === 'success') {
          setSended(true)
          setSending(false)
        } else {
          setError(true)
          setSending(false)
        }
      })
      .catch(() => {
        setError(true)
        setSended(false)
      })
  }

  return (
    <div className='w-full max-w-xl'>
      {error ? (
        <span className='text-2xl font-bold'>{contact[lan].error}</span>
      ) : sended ? (
        <span className='text-3xl font-bold'>{contact[lan].thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <input
              {...register('name', { required: true })}
              className='w-full h-11 p-3 text-black bg-transparent border-2 border-black'
              placeholder={contact[lan].name}
            />
            {errors.name && <Error />}
          </div>
          <div className='mb-4'>
            <input
              {...register('email', { required: true })}
              className='w-full h-11 p-3 text-black bg-transparent border-2 border-black'
              placeholder={contact[lan].email}
            />
            {errors.email && <Error />}
          </div>
          <div className='mb-4'>
            <textarea
              {...register('message', { required: true })}
              className='w-full p-3 h-28 text-black bg-transparent border-2 border-black'
              placeholder={contact[lan].message}
            />
            {errors.message && <Error />}
          </div>
          <div>
            {sending ? (
              <BeatLoader />
            ) : (
              <button className='bg-black w-full text-white h-11 font-bold hover:bg-[#333]'>
                {contact[lan].send}
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  )
}

export default Form
