export default function SectionTitle({ title, text }) {
  return (
    <>
      <h2 className='text-5xl text-center lg:text-left text-grayColor'>
        {title}
      </h2>
      <div className='mt-5 w-full lg:w-4/5'>
        <p className='text-base text-grayColor text-center lg:text-left leading-8'>
          {text}
        </p>
      </div>
    </>
  );
}
