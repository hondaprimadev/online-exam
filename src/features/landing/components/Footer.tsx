import { LogoIcon } from './Icons'

export const Footer = () => {
  return (
    <footer id='footer'>
      <hr className='w-11/12 mx-auto' />

      <section className='container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8'>
        <div className='col-span-full xl:col-span-2'>
          <span className='font-bold text-xl flex mb-4'>
            <LogoIcon />
            OSIST by ERZETID
          </span>
          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'
            >
              Jalan KH Tohir RT 005/003 Sawojajar
              <br /> Wanasari, Kab. Brebes, Jawa Tengah, Indonesia [52252]{' '}
              <br />
              Email: erzetindo@gmail.com <br /> WA/Telp: 083833781043
            </a>
          </div>
        </div>
      </section>

      <section className='pb-12 text-center'>
        <h3>
          &copy; 2024 OSIST by{' '}
          <span className='text-primary transition-all border-primary hover:border-b-2'>
            ERZETID
          </span>
        </h3>
      </section>
    </footer>
  )
}
