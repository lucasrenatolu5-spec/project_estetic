import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import styles from './FloatingWhatsApp.module.css';

const FloatingWhatsApp = () => {
  const { getLink } = useWhatsApp();

  return (
    <motion.a
      href={getLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={styles.pulse} />
      <FaWhatsapp />
    </motion.a>
  );
};

export default FloatingWhatsApp;
