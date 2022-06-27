export default function Title({ title, text }) {
  return (
    <>
      <h2 className='text-5xl text-center lg:text-left text-white'>{title}</h2>
      <p className='text-base mt-5 w-full lg:w-4/5 text-white text-center lg:text-left leading-8'>
        {text}
      </p>
    </>
  );
}
