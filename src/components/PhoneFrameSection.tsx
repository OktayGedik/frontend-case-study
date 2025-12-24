import { FC } from 'react';
import { motion } from 'framer-motion';
import type { Tab } from '@/shared/types';
import { TabId } from '@/shared/types';
import {
  BatchScanningScreenAnimationContent,
  SignStampScreenAnimationContent,
  PhoneFrame,
  PhoneScreenContent,
  AdvancedFilterScreenAnimationContent,
} from '@/components';
import styles from '@/App.module.css';
import { HERO_CONTENT_ANIMATION_DURATION } from '@/shared';

export interface PhoneFrameSectionProps {
  activeTab: Tab;
}

const PHONE_ANIMATION = {
  initial: { y: '100%' },
  animate: { y: 0 },
  transition: {
    duration: HERO_CONTENT_ANIMATION_DURATION,
    delay: HERO_CONTENT_ANIMATION_DURATION / 2,
  },
} as const;

const PHONE_CONTENT_COMPONENTS = {
  [TabId.DocumentScanner]: null,
  [TabId.SignStamp]: SignStampScreenAnimationContent,
  [TabId.BatchScanning]: BatchScanningScreenAnimationContent,
  [TabId.AdvancedFilters]: AdvancedFilterScreenAnimationContent,
  [TabId.ExportShare]: null,
} as const;

export const PhoneFrameSection: FC<PhoneFrameSectionProps> = ({
  activeTab,
}) => {
  const AnimationContentComponent = PHONE_CONTENT_COMPONENTS[activeTab.id];

  return (
    <motion.div
      key={`phone-${activeTab.id}`}
      className={styles.phoneFrameWrapper}
      {...PHONE_ANIMATION}
    >
      <PhoneFrame>
        <PhoneScreenContent screenImage={activeTab.screenContentBaseImage}>
          {AnimationContentComponent && <AnimationContentComponent />}
        </PhoneScreenContent>
      </PhoneFrame>
    </motion.div>
  );
};
