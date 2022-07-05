export default function Banking() {
  return (
    <div className='grid px-10 md:px-12 md:grid-cols-3 mt-5 space-x-5'>
      <div className='grid place-items-center'>
        <img src={'/images/finances.svg'} alt='' />
        <h4 className='mt-4 text-grayColor font-bold text-[18px]'>
          Personal Finances
        </h4>
        <p className='max-w-md text-grayColor text-center pt-2 pb-4'>
          Consolidate financial data from multiple sources and categorize
          transactions up to 2 years of history. Analyze reports to reconcile
          activities in your account.
        </p>
      </div>

      <div className='grid place-items-center'>
        <img src={'/images/banking.svg'} alt='' />
        <h4 className='mt-4 text-grayColor font-bold text-[18px]'>
          Banking & Coverage
        </h4>
        <p className='max-w-md text-grayColor text-center pt-2 pb-4'>
          With our platform, you can speed up account onboarding and support
          ongoing payments for checking, savings, credit card, and brokerage
          accounts.
        </p>
      </div>

      <div className='grid place-items-center'>
        <img src={'/images/payments.svg'} alt='' />
        <h4 className='mt-4 text-grayColor font-bold text-[18px]'>
          Consumer Payments
        </h4>
        <p className='max-w-md text-grayColor text-center pt-2 pb-4'>
          It’s easier to set up secure bank payments with us through a flow
          designed with the user experience in mind. Customers could instantly
          authenticate their account.
        </p>
      </div>
    </div>
  );
}
