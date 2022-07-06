export default function BreadCrumb({ title }) {
  return (
    <div>
      <h2 className='text-[32px] md:text-6xl text-grayColor px-10 md:px-20 max-w-3xl leading-none mt-10'>
        {title}
      </h2>
    </div>
  );
}
