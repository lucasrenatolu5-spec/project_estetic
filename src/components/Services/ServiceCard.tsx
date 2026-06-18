import { motion } from 'framer-motion';
import { HiCheck, HiArrowRight } from 'react-icons/hi2';
import type { Service } from '../../data/types';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className={styles.imageWrap}>
        <img src={service.image} alt={service.name} loading="lazy" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{service.name}</h3>
        <p className={styles.description}>{service.description}</p>
        <ul className={styles.benefits}>
          {service.benefits.map((b) => (
            <li key={b}>
              <HiCheck />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <a href="#contato" className={styles.cardLink}>
          Saiba mais <HiArrowRight />
        </a>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
