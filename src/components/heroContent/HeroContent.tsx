import React, { FC } from 'react';
import styles from './HeroContent.module.css';
import { motion } from 'framer-motion';
import { HERO_CONTENT_ANIMATION_DURATION, Tab } from '@/shared';

const HERO_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: HERO_CONTENT_ANIMATION_DURATION,
  },
} as const;

export interface FeatureHeroContentProps {
  activeTab: Tab;
}

export const HeroContent: FC<FeatureHeroContentProps> = ({ activeTab }) => {
  const content = activeTab.content;
  return (
    <motion.section
      key={`hero-${activeTab.id}`}
      {...HERO_ANIMATION}
      className={styles.wrapper}
    >
      <h4 className={styles.title}>{content.title}</h4>
      <h3 className={styles.subTitle}>{content.subTitle}</h3>
      <p className={styles.description}>{content.description}</p>
      <button className={styles.button}>{content.buttonText}</button>
    </motion.section>
  );
};
