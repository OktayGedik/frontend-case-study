import { FC } from 'react';
import { motion } from 'framer-motion';
import type { Tab } from '@/shared/types';
import { FeatureHeroContent } from '@/components';
import styles from '@/App.module.css';
import { HERO_CONTENT_ANIMATION_DURATION } from '@/shared';

const HERO_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: HERO_CONTENT_ANIMATION_DURATION,
  },
} as const;

export interface HeroSectionProps {
  activeTab: Tab;
}

export const HeroSection: FC<HeroSectionProps> = ({ activeTab }) => {
  return (
    <motion.div
      className={styles.heroContentWrapper}
      key={`hero-${activeTab.id}`}
      {...HERO_ANIMATION}
    >
      <FeatureHeroContent content={activeTab.content} />
    </motion.div>
  );
};
