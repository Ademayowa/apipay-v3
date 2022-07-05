import Layout from '@/components/Layout';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <Layout title='About'>
      <Header />
      <div className='md:px-12'>
        <div>
          {/* Breadcrumb */}
          <h2 className='text-[32px] md:text-[56px] text-grayColor px-20 max-w-3xl leading-none mt-10'>
            We empower innovators by delivering access to the financial system
          </h2>
        </div>

        {/* vision & business */}
        <div className='px-20 mt-20'>
          <div className='flex flex-col md:flex-row justify-between md:space-x-5'>
            <h2 className='text-[24px] md:text-[32px] text-grayColor'>
              Our Vision
            </h2>

            <p className='text-[15px] text-grayColor max-w-2xl'>
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
