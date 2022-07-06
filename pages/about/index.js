import Layout from '@/components/Layout';
import Header from '@/components/Header';
import AboutSectionTitle from '@/section/AboutSectionTitle';
import BreadCrumb from '@/section/BreadCrumb';

export default function AboutPage() {
  return (
    <Layout title='About'>
      <Header />
      <div className='md:px-12'>
        <BreadCrumb title='We empower innovators by delivering access to the financial system' />

        <div className='px-10 md:px-20 mt-14 md:mt-20'>
          <AboutSectionTitle
            title='Our Vision'
            text='Our main goal is to build beautiful consumer experiences along
            with developer-friendly infrastructure. The result is an
            intelligent tool that gives everyone the ability to create amazing
            products that solve big problems. We are deeply focused on
            democratizing financial services through technology.'
          />
          <AboutSectionTitle
            marginTop={`mt-14 md:mt-20`}
            title='Our Business'
            text='At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.'
          />
        </div>

        {/* <div className='px-10 md:px-20 mt-14 md:mt-20'>
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

          <div className='flex flex-col md:flex-row justify-between md:space-x-5 mt-14'>
            <h2 className='text-[24px] md:text-[32px] text-grayColor'>
              Our Business
            </h2>
            <p className='text-[15px] text-grayColor max-w-2xl'>
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </div> */}
      </div>

      <div className='absolute top-0 right-0'>
        <img src={'/images/about-shape.png'} alt='' />
      </div>
    </Layout>
  );
}
