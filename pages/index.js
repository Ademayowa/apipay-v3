import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Implement from '@/components/Implement';
import SimpleUI from '@/components/SimpleUI';

export default function Home() {
  return (
    <Layout title='Home'>
      <div>
        <Header />
        <Hero />
        <Work />
        <Implement />
        <SimpleUI />
      </div>
    </Layout>
  );
}
