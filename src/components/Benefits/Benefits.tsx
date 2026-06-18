import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineCpuChip, HiOutlineHeart, HiOutlineShieldCheck } from 'react-icons/hi2';
import type { ReactElement } from 'react';
import SectionHeading from '../common/SectionHeading';
import { BENEFITS } from '../../data/content';
import styles from './Benefits.module.css';

const ICONS: Record<string, ReactElement> = {
  certificate: <HiOutlineAcademicCap />,
  device: <HiOutlineCpuChip />,
  heart: <HiOutlineHeart />,
  shield: <HiOutlineShieldCheck />,
};

const Benefits = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Por que escolher a gente"
          title={
            <>
              Confiança que se constrói em <em>cada detalhe</em>
            </>
          }
        />

        <div className={styles.grid}>
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.id}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.icon}>{ICONS[b.icon]}</span>
              <h3>{b.title}</h3>
              <p>{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
