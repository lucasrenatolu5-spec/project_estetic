import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi2';
import Button from '../common/Button';
import ContactForm from './ContactForm';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import styles from './FinalCTA.module.css';

const FinalCTA = () => {
  const { getLink } = useWhatsApp();

  return (
    <section id="contato" className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.textCol}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.eyebrow}>
            <HiOutlineSparkles />
            Comece sua transformação hoje
          </span>
          <h2 className={styles.headline}>
            Sua melhor versão começa com <em>uma conversa</em>
          </h2>
          <p className={styles.description}>
            Agende uma avaliação gratuita e descubra, com a orientação de
            especialistas, qual protocolo é ideal para os seus objetivos.
            Sem compromisso, sem pressão — só clareza.
          </p>

          <div className={styles.ctaRow}>
            <Button href={getLink()} variant="whatsapp" size="lg" icon={<FaWhatsapp />}>
              Falar no WhatsApp agora
            </Button>
          </div>

          <ul className={styles.reassurance}>
            <li>Avaliação inicial sem compromisso</li>
            <li>Resposta em até 1 hora útil</li>
            <li>Atendimento humano, sem robôs</li>
          </ul>
        </motion.div>

        <motion.div
          className={styles.formCol}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;