import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Team } from '@/components/team';
import { Portfolio } from '@/components/portfolio';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Services />
      <Team />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
