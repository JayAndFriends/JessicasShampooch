import { useEffect } from 'react';
import { useScrollReveal } from '@hooks/useScrollReveal';
import { initAnalytics } from '@utils/analytics';
import { SEO } from './components/SEO';
import {
  Header,
  Hero,
  ValueProposition,
  Testimonials,
  ContactForm,
  Footer,
} from '@components/sections';

function App() {
  // Initialize scroll reveal animations
  useScrollReveal();

  // Initialize analytics on mount
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <>
      <SEO />
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Hero />
          <ValueProposition />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
