import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <div className='flex flex-col-reverse items-center px-10 md:px-12 md:mt-10 md:flex-row'>
        {/* left */}
        <div className='flex flex-col md:w-1/2'>
          <h1 className='text-[32px] md:text-5xl lg:text-[72px] md:text-left text-center text-grayColor font-normal leading-none lg:-mt-40'>
            Start building <br /> with our APIs for absolutely free.
          </h1>

          <form className='mt-10 relative'>
            <input
              className='block pl-9 sm:text-sm border-gray-300 rounded-full h-14 w-full md:w-9/12 shadow-lg font-bold text-grayColor outline-none mb-3 md:mb-0'
              type='text'
              placeholder='Enter email address'
            />

            <button className='bg-[#BA4270] text-white text-[15px] font-bold py-3 px-6 rounded-full w-full md:w-auto shadow-lg h-14 md:absolute top-0 right-20'>
              Schedule a Demo
            </button>

            <p className='text-[15px] text-grayColor text-center md:text-left mt-5 md:px-10'>
              Have any questions? <span className='font-bold'>Contact Us</span>
            </p>
          </form>
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
