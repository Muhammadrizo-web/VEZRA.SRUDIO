import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Stats from './components/Stats';
import Services from './components/Services';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased">

      <Navbar />

      <section id="about">
        <Hero />
      </section>

      <section id="clients">
        <Clients />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="contact">
        <CTA />
      </section>

      <Footer />

    </div>
  );
}