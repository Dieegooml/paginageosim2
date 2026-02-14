import ServicesHero from '../components/services/ServicesHero';
import ServicesIntro from '../components/services/ServicesIntro';
import ServiceDetail from '../components/services/ServiceDetail';
import MethodologyBanner from '../components/services/MethodologyBanner';
import CompaniesExperience from '../components/home/CompaniesExperience';
import ServicesCTA from '../components/services/ServicesCTA';
import { services } from '../data/services';

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />

      {/* Services with alternating layout */}
      {services.map((service, index) => (
        <ServiceDetail
          key={service.id}
          service={service}
          index={index}
          isReversed={index % 2 !== 0}
        />
      ))}

      <MethodologyBanner />
      <CompaniesExperience />
      <ServicesCTA />
    </>
  );
};

export default Services;
