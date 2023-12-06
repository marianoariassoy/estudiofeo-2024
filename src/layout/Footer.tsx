import Form from './Form'
import { Instagram } from '../icons/icons'

const Footer = () => {
  return (
    <section className='grid lg:grid-cols-2 items-end gap-y-12 px-6 lg:px-12 py-12'>
      <div className='w-full flex flex-col gap-y-1 text-xl'>
        <div>
          <a
            href='https://wa.me/5493874848331'
            className='hover:opacity-50'
          >
            +54 9 387 4848331
          </a>
          <span className='px-3'>|</span>
          <a
            href='https://wa.me/5493873436896'
            className='hover:opacity-50'
          >
            +54 9 387 3436896
          </a>
        </div>
        <div>
          <a
            href='https://goo.gl/maps/6mCdpgkqNceZ1mMWA'
            className='hover:opacity-50'
            target='_blank'
            rel='noopener noreferrer'
          >
            Pueyrredón 190 &bull; Salta | Argentina
          </a>
        </div>
        <div>
          <a
            href='mailto:hola@estudiofeo.com'
            className='hover:opacity-50'
          >
            hola@estudiofeo.com
          </a>
        </div>
        <div className='flex gap-x-3 items-center'>
          <Instagram />
          <a
            href='https://instagram.com/estudio.feo'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-50'
          >
            @estudio.feo
          </a>
          |
          <a
            href='https://instagram.com/tienda.feo'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-50'
          >
            @tienda.feo
          </a>
          |
          <a
            href='https://instagram.com/galeria.feo'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-50'
          >
            @galeria.feo
          </a>
        </div>
      </div>
      <div className='w-full  flex justify-end'>
        <Form />
      </div>
    </section>
  )
}

export default Footer
