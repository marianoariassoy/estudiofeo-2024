import Layout from '../../layout'
import { HeadProvider, Title } from 'react-head'
import { Instagram, Behance } from '../../icons/icons'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { lan } = useDataContext()

  return (
    <Layout>
      <section className='px-6 lg:px-12'>
        <div className='text-xl mb-12'>
          <h1 className='font-bold text-7xl mb-4'>
            {lan === 'ES' ? 'estudio' : 'studio'}
          </h1>
          <div className='flex gap-3'>
            <a
              href='https://wa.me/5493874848331'
              className='hover:line-through'
            >
              +54 9 387 4848331
            </a>
            |
            <a
              href='https://wa.me/5493873436896'
              className='hover:line-through'
            >
              +54 9 387 3436896
            </a>
          </div>
          <div>
            <a
              href='https://goo.gl/maps/6mCdpgkqNceZ1mMWA'
              className='hover:line-through'
              target='_blank'
              rel='noopener noreferrer'
            >
              Pueyrredón 190 &bull; Salta | Argentina
            </a>
          </div>
          <div>
            <a
              href='mailto:hola@estudiofeo.com'
              className='hover:line-through'
            >
              hola@estudiofeo.com
            </a>
          </div>
          <div className='flex gap-3 items-center'>
            <Instagram />
            <a
              href='https://instagram.com/estudio.feo'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:line-through'
            >
              @estudio.feo
            </a>
          </div>
          <div className='flex gap-3 items-center'>
            <Behance />
            <a
              href='https://www.behance.net/estudio_feo'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:line-through'
            >
              behance.net/estudio_feo
            </a>
          </div>
        </div>

        <div className='text-xl mb-12'>
          <h1 className='font-bold text-7xl mb-4'>
            {lan === 'ES' ? 'tienda' : 'shop'}
          </h1>
          <div className='flex gap-3'>
            <a
              href='https://wa.me/5493874848331'
              className='hover:line-through'
            >
              +54 9 387 4848331
            </a>
            |
            <a
              href='https://wa.me/5493873436896'
              className='hover:line-through'
            >
              +54 9 387 3436896
            </a>
          </div>
          <div>
            <a
              href='https://goo.gl/maps/6mCdpgkqNceZ1mMWA'
              className='hover:line-through'
              target='_blank'
              rel='noopener noreferrer'
            >
              Pueyrredón 190 &bull; Salta | Argentina
            </a>
          </div>
          <div>
            <a
              href='mailto:tienda.feo@gmail.com'
              className='hover:line-through'
            >
              tienda.feo@gmail.com
            </a>
          </div>
          <div className='flex gap-3 items-center'>
            <Instagram />
            <a
              href='https://instagram.com/tienda.feo'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:line-through'
            >
              @tienda.feo
            </a>
          </div>
        </div>

        <div className='text-xl mb-12'>
          <h1 className='font-bold text-7xl mb-4'>
            {lan === 'ES' ? 'galería' : 'gallerie'}
          </h1>
          <div className='flex gap-3'>
            <a
              href='https://wa.me/5493874848331'
              className='hover:line-through'
            >
              +54 9 387 4848331
            </a>
            |
            <a
              href='https://wa.me/5493873436896'
              className='hover:line-through'
            >
              +54 9 387 3436896
            </a>
          </div>
          <div>
            <a
              href='https://goo.gl/maps/6mCdpgkqNceZ1mMWA'
              className='hover:line-through'
              target='_blank'
              rel='noopener noreferrer'
            >
              Pueyrredón 190 &bull; Salta | Argentina
            </a>
          </div>
          <div>
            <a
              href='mailto:galeria.feo@gmail.com'
              className='hover:line-through'
            >
              galeria.feo@gmail.com
            </a>
          </div>
          <div className='flex gap-3 items-center'>
            <Instagram />
            <a
              href='https://instagram.com/galeria.feo'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:line-through'
            >
              @galeria.feo
            </a>
          </div>
        </div>
      </section>

      <HeadProvider>
        <Title>FEO - Contact</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
