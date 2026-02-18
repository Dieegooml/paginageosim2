import ServicesHero from '../components/services/ServicesHero';
import ServicesIntro from '../components/services/ServicesIntro';
import ServiceDetail from '../components/services/ServiceDetail';
import MethodologyBanner from '../components/services/MethodologyBanner';
import CompaniesExperience from '../components/home/CompaniesExperience';
import ServicesCTA from '../components/services/ServicesCTA';
import { services } from '../data/services';
import { useTranslation } from 'react-i18next';
import { localizeService } from '../i18n/serviceI18n';

const Services = () => {
  const { t, i18n } = useTranslation();
  const localizedServices = services.map((service) => localizeService(t, service, i18n.language));

  return (
    <>
      <ServicesHero />
      <ServicesIntro />

      {/* Services with alternating layout */}
      {localizedServices.map((service, index) => (
        <ServiceDetail
          key={service.id}
          service={service}
          index={index}
          isReversed={index % 2 !== 0}
        />
      ))}

      <MethodologyBanner />
      <CompaniesExperience mode="carousel" />
      <ServicesCTA />
    </>
  );
};

export default Services;
