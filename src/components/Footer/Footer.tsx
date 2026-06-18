import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { HiOutlineMapPin, HiOutlineClock, HiOutlinePhone } from 'react-icons/hi2';
import { SITE } from '../../data/content';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import styles from './Footer.module.css';

const Footer = () => {
  const { getLink } = useWhatsApp();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <span className={styles.logo}>{SITE.name}</span>
          <p className={styles.tagline}>
            Estética facial e corporal com técnica, segurança e resultados naturais.
          </p>
          <div className={styles.socials}>
            <a href={getLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Contato</h4>
          <ul className={styles.infoList}>
            <li>
              <HiOutlinePhone /> {SITE.phone}
            </li>
            <li>
              <HiOutlineMapPin /> {SITE.address}
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Horário de atendimento</h4>
          <ul className={styles.hoursList}>
            {SITE.hours.map((h) => (
              <li key={h.days}>
                <HiOutlineClock />
                <span>
                  {h.days}: <strong>{h.time}</strong>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Navegação</h4>
          <ul className={styles.navList}>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Tratamentos</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className="container">
          <p>
            © {year} {SITE.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
