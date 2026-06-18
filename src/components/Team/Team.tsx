import SectionHeading from '../common/SectionHeading';
import TeamCard from './TeamCard';
import { TEAM } from '../../data/content';
import styles from './Team.module.css';

const Team = () => {
  return (
    <section id="equipe" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Nossa equipe"
          title={
            <>
              Especialistas que cuidam de <em>você</em>
            </>
          }
          description="Profissionais certificadas, em constante atualização, comprometidas com resultados seguros e naturais."
        />

        <div className={styles.grid}>
          {TEAM.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
