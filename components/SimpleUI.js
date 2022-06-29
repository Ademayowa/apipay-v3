import SectionTitle from '@/section/SectionTitle';

export default function Implement() {
  return (
    <section className='relative'>
      <div className='flex items-center flex-col lg:flex-row-reverse px:10 md:px-12 mt-10 md:mt-20'>
        {/* z-index on parent div */}
        <div className='w-full md:w-1/2 z-50'>
          <div className='flex'>
            <img
              src='/images/phone1.svg'
              alt='shape'
              className='w-60 lg:w-72 -mr-20'
            />
            <img
              src='/images/phone2.svg'
              alt='shape'
              className='w-60 lg:w-72'
            />
          </div>
        </div>

        <div className='w-full md:w-1/2 md:-mt-10'>
          <h2 className='text-5xl text-center lg:text-left text-grayColor'>
            Simple UI & UX
          </h2>
          <div className='mt-5 w-full lg:w-4/5'>
            <p className='text-base text-grayColor text-center lg:text-left leading-8 max-w-xl'>
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </p>
          </div>
        </div>
      </div>

      <div className='hidden lg:block absolute -top-40 right-0'>
        <img src='/images/simple-shape.png' alt='shape' />
      </div>
    </section>
  );
}
