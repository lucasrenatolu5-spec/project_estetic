import SectionHeading from '../common/SectionHeading';
import ServiceCard from './ServiceCard';
import { SERVICES } from '../../data/content';
import styles from './Services.module.css';

const Services = () => {
  return (
    <section id="servicos" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Tratamentos"
          title={
            <>
              Protocolos pensados para <em>cada objetivo</em>
            </>
          }
          description="Combinamos técnica, tecnologia e escuta ativa para indicar o tratamento certo para a sua pele e seus objetivos."
        />

        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
