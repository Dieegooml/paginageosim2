import Hero from '../components/home/Hero';
import HomeTabs from '../components/home/HomeTabs';
import TrustIndicators from '../components/home/TrustIndicators';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyUs from '../components/home/WhyUs';
import CompaniesExperience from '../components/home/CompaniesExperience';
import LocationMap from '../components/home/LocationMap';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <HomeTabs />
      <TrustIndicators />
      <ServicesPreview />
      <WhyUs />
      <CompaniesExperience />
      <LocationMap />
      <CTASection />
    </>
  );
};

export default Home;
