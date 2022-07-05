import Form from '@/components/Form';

export default function Ready() {
  return (
    <div className='flex flex-col lg:flex-row items-center px-10 md:px-12 mt-10 py-20'>
      <div className='lg:w-9/12'>
        <h2 className='text-grayColor text-5xl text-center lg:text-left'>
          Ready to start
        </h2>
      </div>

      <div className='w-full lg:w-9/12 sm:mt-5 !md:mt-0'>
        <form>
          <div className='container'>
            <div className='relative'>
              <input
                className='block pl-9 sm:text-sm border-gray-300 rounded-full h-14 w-full shadow-lg font-bold text-grayColor outline-none focus:shadow focus:outline-none'
                type='text'
                placeholder='Enter email address'
              />

              <div className='absolute top-0 right-0'>
                <button className='bg-[#BA4270] text-white text-[15px] font-bold py-3 px-6 rounded-full w-full md:w-auto shadow-lg h-14'>
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
