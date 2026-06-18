import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'whatsapp';
  href?: string;
  onClick?: () => void;
  size?: 'md' | 'lg';
  icon?: ReactNode;
  className?: string;
  type?: 'button' | 'submit';
}

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  size = 'md',
  icon,
  className = '',
  type = 'button',
}: ButtonProps) => {
  const classes = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  const content = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={classes} type={type} {...motionProps}>
      {content}
    </motion.button>
  );
};

export default Button;
