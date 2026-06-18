import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import Button from '../common/Button';
import { SERVICES } from '../../data/content';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  phone: string;
  service: string;
}

const ContactForm = () => {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', service: '' });
  const [submitted, setSubmitted] = useState(false);
  const { getLink } = useWhatsApp();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${form.name}. Tenho interesse em: ${
      form.service || 'uma avaliação'
    }. Meu telefone: ${form.phone}`;
    window.open(getLink(message), '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        className={styles.success}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <HiOutlineCheckCircle className={styles.successIcon} />
        <h3>Quase lá!</h3>
        <p>Abrimos o WhatsApp para você finalizar o contato com nossa equipe.</p>
        <button className={styles.resetLink} onClick={() => setSubmitted(false)}>
          Enviar outra solicitação
        </button>
      </motion.div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Nome completo</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Seu nome"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">WhatsApp</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="(00) 00000-0000"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="service">Tratamento de interesse</label>
        <select id="service" name="service" value={form.service} onChange={handleChange}>
          <option value="">Selecione (opcional)</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <Button size="lg" type="submit" className={styles.submitBtn}>
        Solicitar Avaliação Gratuita
      </Button>
      <p className={styles.privacy}>Seus dados estão seguros e não serão compartilhados.</p>
    </form>
  );
};

export default ContactForm;
