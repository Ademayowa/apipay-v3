import Image from 'next/image';
import Form from './Form';

export default function Hero() {
  return (
    <section>
      <div className='flex flex-col-reverse items-center px-10 md:px-12 md:mt-10 md:flex-row'>
        {/* left */}
        <div className='flex flex-col md:w-1/2'>
          <h1 className='text-[32px] md:text-5xl lg:text-[72px] md:text-left text-center text-grayColor font-normal leading-none lg:-mt-40'>
            Start building <br /> with our APIs for absolutely free.
          </h1>

          <Form />
        </div>

        {/* Right image */}
        <div className='md:w-1/2'>
          <Image
            src={'/images/hero-phone.png'}
            alt='phone'
            width={600}
            height={700}
            objectFit='contain'
            className='z-50'
          />
        </div>

        <div className='hidden lg:block absolute top-0 right-0'>
          <img src={'/images/hero-shape.png'} alt='shape' />
        </div>
      </div>
    </section>
  );
}
