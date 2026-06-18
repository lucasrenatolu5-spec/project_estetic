import SectionHeading from '../common/SectionHeading';
import BeforeAfterSlider from './BeforeAfterSlider';
import { BEFORE_AFTER } from '../../data/beforeAfter';
import styles from './BeforeAfter.module.css';

const BeforeAfter = () => {
  return (
    <section id="resultados" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Resultados reais"
          title={
            <>
              Arraste e veja a <em>transformação</em>
            </>
          }
          description="Resultados de clientes reais que confiaram em nossos protocolos. Arraste o controle deslizante para comparar antes e depois."
        />

        <div className={styles.grid}>
          {BEFORE_AFTER.map((item) => (
            <BeforeAfterSlider
              key={item.id}
              title={item.title}
              procedure={item.procedure}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
