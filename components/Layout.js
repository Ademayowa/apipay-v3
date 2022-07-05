import Footer from '@/section/Footer';
import Head from 'next/head';

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      {children}

      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: 'PayApi',
  description: 'Build with our APIs for absolutely free',
};
