import { Hero } from '@/components/main/hero';
import { Navbar } from '@/components/main/navbar';

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <Navbar />
      <Hero />
    </main>
  );
}
