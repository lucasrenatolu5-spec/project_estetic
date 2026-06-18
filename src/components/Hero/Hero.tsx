import { motion } from 'framer-motion';
import { FaWhatsapp, FaStar } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi2';
import Button from '../common/Button';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import heroImage from '../../assets/images/hero-especialista.jpg';
import styles from './Hero.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const Hero = () => {
  const { getLink } = useWhatsApp();

  return (
    <section id="topo" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <motion.span className={styles.eyebrow} {...fadeUp(0)}>
            <HiOutlineSparkles />
            Estética facial &amp; corporal de alto padrão
          </motion.span>

          <motion.h1 className={styles.headline} {...fadeUp(0.1)}>
            Revele a melhor versão da sua pele com{' '}
            <em>resultados naturais</em> que você pode confiar
          </motion.h1>

          <motion.p className={styles.subheadline} {...fadeUp(0.2)}>
            Protocolos personalizados, profissionais especialistas e tecnologia de
            ponta para transformar sua autoestima com segurança — do primeiro
            atendimento ao resultado final.
          </motion.p>

          <motion.div className={styles.trustRow} {...fadeUp(0.3)}>
            <div className={styles.trustItem}>
              <strong>3.200+</strong>
              <span>clientes atendidas</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.trustItem}>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span>4.9 de avaliação</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.trustItem}>
              <strong>12 anos</strong>
              <span>de experiência</span>
            </div>
          </motion.div>

          <motion.div className={styles.ctaRow} {...fadeUp(0.4)}>
            <Button href="#contato" variant="primary" size="lg">
              Agendar Avaliação
            </Button>
            <Button href={getLink()} variant="secondary" size="lg" icon={<FaWhatsapp />}>
              Falar no WhatsApp
            </Button>
          </motion.div>
        </div>

        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageFrame}>
            <img
              src={heroImage}
              alt="Especialista da clínica realizando avaliação profissional com equipamento moderno"
              className={styles.image}
            />
          </div>

          <motion.div
            className={styles.floatCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.floatIconCircle}>
              <HiOutlineSparkles />
            </div>
            <div>
              <strong>Profissionais certificadas</strong>
              <span>Atendimento personalizado e seguro</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.floatBadge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <strong>98%</strong>
            <span>satisfação</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
