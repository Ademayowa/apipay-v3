import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Work from '@/components/Work';

export default function Home() {
  return (
    <Layout title='Home'>
      <div>
        <Header />
        <Hero />
        <Work />
      </div>
    </Layout>
  );
}
