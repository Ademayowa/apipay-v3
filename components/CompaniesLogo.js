export default function CompaniesLogo() {
  return (
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
  );
}
