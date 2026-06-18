import { motion } from 'framer-motion';
import { STATS } from '../../data/content';
import styles from './SocialProof.module.css';

const SocialProof = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.id}
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
