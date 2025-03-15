import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BindingTypes from '@/components/BindingTypes';
import Configurator from '@/components/Configurator';
import ThreeDLogo from '@/components/ThreeDLogo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <ThreeDLogo />
      <BindingTypes />
      <Configurator />
      <Contact />
      <Footer />
    </main>
  );
}
