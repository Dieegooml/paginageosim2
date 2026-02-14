import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import TrustIndicators from '../components/home/TrustIndicators';
import ServicesPreview from '../components/home/ServicesPreview';
import LocationMap from '../components/home/LocationMap';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <TrustIndicators />
      <LocationMap />
    </>
  );
};

export default Home;
