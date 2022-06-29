import Title from '@/section/Title';
import CompaniesLogo from './CompaniesLogo';

export default function Work() {
  return (
    <section className='bg-[#1B262F] relative'>
      {/* Left */}
      <div className='flex flex-col-reverse lg:flex-row py-20'>
        <div className='px-10 md:px-12 w-full lg:w-1/2'>
          <Title
            title='Who we work with'
            text='Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.'
          />

          <div className='text-center lg:text-left'>
            <button className='text-center border border-gray-500 text-white text-[15px] font-bold  py-3 px-8 mt-5 rounded-full'>
              About Us
            </button>
          </div>
        </div>

        {/* width here is w-full, lg:1/2 */}
        <CompaniesLogo />
      </div>

      <div className='absolute top-0'>
        <img src={'/images/work-shape.png'} alt='shape' />
      </div>
    </section>
  );
}
