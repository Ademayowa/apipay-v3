export default function AboutImg() {
  return (
    <div className='relative'>
      <div className='z-50'>
        {/*Fix z-index on shape to image later */}
        <img src={'/images/about-img.png'} alt='' />
      </div>

      <div className='z-30'>
        <img
          src={'/images/about-img-shape.png'}
          alt=''
          className='absolute -top-40 z-0'
        />
      </div>
    </div>
  );
}
