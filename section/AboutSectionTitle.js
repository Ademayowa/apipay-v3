export default function AboutSectionTitle({ title, text, marginTop }) {
  return (
    <div
      className={`flex flex-col md:flex-row justify-between md:space-x-5 ${marginTop}`}
    >
      <h2 className='text-[24px] md:text-[32px] text-grayColor'>{title}</h2>
      <p className='text-[15px] text-grayColor max-w-2xl'>{text}</p>
    </div>
  );
}
