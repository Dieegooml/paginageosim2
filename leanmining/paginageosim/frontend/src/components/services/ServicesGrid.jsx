import { motion } from 'framer-motion';
import Container from '../ui/Container';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

const ServicesGrid = () => {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;
