import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import OurProducts from '../components/OurProducts';

function Home() {
  return (
    <div className="min-h-screen pt-12">
      <Hero />
      <AboutSection id={'about'} />
      <ServicesSection id={'services'} />
      <TestimonialsSection />
      <OurProducts />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default Home;