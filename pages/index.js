import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <Layout title='Home'>
      <div>
        <Header />
        <Hero />
        {/* Search */}
      </div>
    </Layout>
  );
}
