export default function Footer() {
  return (
    <footer>
      <div className='flex lg:flex-row items-center bg-[#1B262F] py-5 px-10 md:px-12'>
        <div className='flex items-center space-x-10'>
          <div>
            <img src={'/images/footer-logo.png'} alt='' />
          </div>

          <div>
            <ul className='text-white flex flex-row space-x-5'>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Fix mobile screens later */}
        <div className='ml-auto flex items-center space-x-5'>
          <img src={'/images/facebook.svg'} alt='' />
          <img src={'/images/twitter.svg'} alt='' />
          <img src={'/images/linkedin.svg'} alt='' />
        </div>
      </div>

      <div className='relative'>
        <div className='absolute top-0 right-0'>
          {/* Add footer shape later */}
          {/* <img src={'/images/footer-shape.png'} alt='' /> */}
        </div>
      </div>
    </footer>
  );
}
