import SectionTitle from '@/section/SectionTitle';

export default function Implement() {
  return (
    <div className='flex items-center flex-col lg:flex-row px:10 md:px-12 mt-10 md:mt-20'>
      <div className='w-full md:w-1/2'>
        <img src='/images/implement.svg' alt='shape' />
      </div>

      <div className='w-full md:w-1/2 md:-mt-10'>
        <SectionTitle
          title='Easy to implement'
          text='Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.'
        />
      </div>
    </div>
  );
}
