import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Implement from '@/components/Implement';
import SimpleUI from '@/components/SimpleUI';
import Banking from '@/components/Banking';
import Form from '@/components/Form';
import Ready from '@/section/Ready';

export default function Home() {
  return (
    <Layout title='Home'>
      <div>
        <Header />
        <Hero />
        <Work />
        <Implement />
        <SimpleUI />
        <Banking />
        <Ready />
      </div>
    </Layout>
  );
}
