import AboutHero from '../components/about/AboutHero';
import MethodologySection from '../components/about/MethodologySection';
import SustainabilitySection from '../components/about/SustainabilitySection';
import ExpertiseAreas from '../components/about/ExpertiseAreas';
import AboutCTA from '../components/about/AboutCTA';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <AboutHero />
      <MethodologySection />
      <SustainabilitySection />
      <ExpertiseAreas />
      <AboutCTA />
    </div>
  );
};

export default About;
