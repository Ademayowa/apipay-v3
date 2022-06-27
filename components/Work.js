export default function Work() {
  return (
    <section className='bg-[#1B262F] relative'>
      {/* Left */}
      <div className='flex flex-col-reverse lg:flex-row py-20'>
        <div className='px-10 md:px-12 w-full lg:w-1/2'>
          <h2 className='text-5xl text-center lg:text-left text-white'>
            Who we work with
          </h2>

          <div className='mt-5 w-full lg:w-4/5'>
            {/* Fix width on tab & large screens later */}
            <p className='text-base text-white text-center lg:text-left leading-8'>
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
          </div>

          <div className='text-center lg:text-left'>
            <button className='text-center border border-gray-500 text-white text-[15px] font-bold  py-3 px-8 mt-5 rounded-full'>
              About Us
            </button>
          </div>
        </div>

        {/* Right */}
        <div className='px-10 md:px-12 lg:mt-12 w-full lg:w-1/2'>
          <div className='grid grid-cols-2 md:grid-cols-3 justify-items-center space-x-10 space-y-10 mb-12'>
            <img src={'/images/tesla.svg'} alt='' className='mt-11' />
            <img src={'/images/microsoft.png'} alt='' />
            <img src={'/images/hp.png'} alt='' />
            <img src={'/images/oracle.svg'} alt='' />
            <img src={'/images/google.png'} alt='' />
            <img src={'/images/nvidia.png'} alt='' />
          </div>
        </div>
      </div>

      <div className='absolute top-0'>
        <img src={'/images/work-shape.png'} alt='shape' />
      </div>
    </section>
  );
}
