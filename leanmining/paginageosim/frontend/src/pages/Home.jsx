import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import HomeTabs from '../components/home/HomeTabs';
import TrustIndicators from '../components/home/TrustIndicators';
import ServicesPreview from '../components/home/ServicesPreview';
import LocationMap from '../components/home/LocationMap';

const Home = () => {
  return (
    <>
      <Hero />
      <HomeTabs />
      <AboutPreview />
      <ServicesPreview />
      <TrustIndicators />
      <LocationMap />
    </>
  );
};

export default Home;
