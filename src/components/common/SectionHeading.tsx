import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) => {
  return (
    <motion.div
      className={`${styles.wrap} ${styles[align]} ${light ? styles.light : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </motion.div>
  );
};

export default SectionHeading;
