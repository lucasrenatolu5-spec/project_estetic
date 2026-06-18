import { motion } from 'framer-motion';
import { HiOutlineHeart, HiOutlineShieldCheck, HiOutlineSparkles } from 'react-icons/hi2';
import SectionHeading from '../common/SectionHeading';
import procImage from '../../assets/images/procedimento-facial-2.jpg';
import styles from './About.module.css';

const PILLARS = [
  {
    icon: <HiOutlineHeart />,
    title: 'Acolhimento',
    text: 'Cada cliente é ouvida com atenção antes de qualquer indicação de tratamento.',
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Segurança clínica',
    text: 'Protocolos validados, produtos registrados e biossegurança em cada etapa.',
  },
  {
    icon: <HiOutlineSparkles />,
    title: 'Resultado natural',
    text: 'Buscamos sempre realçar, nunca transformar de forma artificial.',
  },
];

const About = () => {
  return (
    <section id="sobre" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.imageCol}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageFrame}>
            <img src={procImage} alt="Procedimento estético facial realizado por especialista" />
          </div>
          <div className={styles.experienceTag}>
            <strong>12+</strong>
            <span>anos transformando vidas</span>
          </div>
        </motion.div>

        <div className={styles.textCol}>
          <SectionHeading
            align="left"
            eyebrow="Nossa história"
            title={
              <>
                Cuidado estético com <em>propósito</em> e técnica
              </>
            }
          />

          <p className={styles.paragraph}>
            Nascemos do desejo de oferecer um padrão de atendimento estético que
            une ciência, sensibilidade e bons resultados. Ao longo de mais de
            uma década, construímos uma clínica onde cada cliente é acompanhada
            de forma individual — sem fórmulas prontas, sem promessas
            irreais.
          </p>
          <p className={styles.paragraph}>
            Nossa missão é simples: ajudar você a se sentir bem na própria
            pele, com segurança, ética e profissionais que realmente entendem
            do assunto.
          </p>

          <div className={styles.pillars}>
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                className={styles.pillar}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className={styles.pillarIcon}>{p.icon}</span>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
