import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import styles from './BeforeAfterSlider.module.css';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  procedure: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, title, procedure }: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(98, Math.max(2, pct)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    dragging.current = false;
  };

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={styles.container}
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <img src={afterImage} alt={`Depois - ${title}`} className={styles.imageAfter} draggable={false} />
        <div className={styles.beforeWrap} style={{ width: `${position}%` }}>
          <img src={beforeImage} alt={`Antes - ${title}`} className={styles.imageBefore} draggable={false} />
        </div>

        <span className={styles.labelBefore}>Antes</span>
        <span className={styles.labelAfter}>Depois</span>

        <div className={styles.handle} style={{ left: `${position}%` }}>
          <div className={styles.handleCircle}>
            <span>‹</span>
            <span>›</span>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <h4>{title}</h4>
        <p>{procedure}</p>
      </div>
    </motion.div>
  );
};

export default BeforeAfterSlider;
