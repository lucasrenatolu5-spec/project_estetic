import { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import AccordionItem from './AccordionItem';
import { FAQS } from '../../data/content';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title={
            <>
              Tire suas <em>dúvidas</em>
            </>
          }
        />

        <div className={styles.list}>
          {FAQS.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
