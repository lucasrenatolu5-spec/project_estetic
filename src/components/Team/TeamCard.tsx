import { motion } from 'framer-motion';
import { HiOutlineCheckBadge } from 'react-icons/hi2';
import type { TeamMember } from '../../data/types';
import { placeholderImage } from '../../assets/placeholders/placeholderImage';
import styles from './TeamCard.module.css';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  const photo = member.photo || placeholderImage(member.name.split(' ')[0], 'light');

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.imageWrap}>
        <img src={photo} alt={member.name} loading="lazy" />
      </div>
      <div className={styles.body}>
        <h3>{member.name}</h3>
        <span className={styles.specialty}>{member.specialty}</span>
        <ul className={styles.certs}>
          {member.certifications.map((c) => (
            <li key={c}>
              <HiOutlineCheckBadge />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default TeamCard;
