import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SocialProof from './components/SocialProof/SocialProof';
import About from './components/About/About';
import Services from './components/Services/Services';
import Benefits from './components/Benefits/Benefits';
import BeforeAfter from './components/BeforeAfter/BeforeAfter';
import Testimonials from './components/Testimonials/Testimonials';
import Team from './components/Team/Team';
import FAQ from './components/FAQ/FAQ';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Services />
        <Benefits />
        <BeforeAfter />
        <Testimonials />
        <Team />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
