import { useEffect, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionHeading from '../common/SectionHeading';
import { TESTIMONIALS } from '../../data/content';
import styles from './Testimonials.module.css';

const AUTOPLAY_MS = 6000;

const getInitials = (name: string) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = TESTIMONIALS.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const current = TESTIMONIALS[index];

  return (
    <section id="depoimentos" className={styles.section}>
      <div className="container">
        <SectionHeading
          light
          eyebrow="O que dizem nossas clientes"
          title={
            <>
              Histórias reais de <em>transformação</em>
            </>
          }
        />

        <div
          className={styles.carousel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button className={styles.navBtn} onClick={prev} aria-label="Depoimento anterior">
            <FiChevronLeft />
          </button>

          <div className={styles.cardWrap}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className={styles.card}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <FaQuoteLeft className={styles.quoteIcon} />
                <div className={styles.stars}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className={styles.text}>{current.text}</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>{getInitials(current.name)}</div>
                  <div>
                    <strong>{current.name}</strong>
                    {current.role && <span>{current.role}</span>}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className={styles.navBtn} onClick={next} aria-label="Próximo depoimento">
            <FiChevronRight />
          </button>
        </div>

        <div className={styles.dots}>
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ver depoimento de ${t.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
