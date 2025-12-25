import { FC } from 'react';
import { motion } from 'framer-motion';
import type { Tab } from '@/shared/types';
import { TabId } from '@/shared/types';
import {
  BatchScanningAnimation,
  SignStampAnimation,
  PhoneFrame,
  PhoneScreenImageOverlay,
  AdvancedFilterAnimation,
  ExportAnimation,
} from '@/components';
import styles from '@/App.module.css';
import { HERO_CONTENT_ANIMATION_DURATION } from '@/shared';
import { PHONE_FRAME_TRANSLATE_ANIMATION_DURATION } from '@/shared/constants/animationConstants';

export interface PhoneFrameSectionProps {
  activeTab: Tab;
}

const PHONE_TRANSLATE_ANIMATION = {
  initial: { y: '100%' },
  animate: { y: 0 },
  transition: {
    duration: PHONE_FRAME_TRANSLATE_ANIMATION_DURATION,
    delay: HERO_CONTENT_ANIMATION_DURATION / 2,
  },
} as const;

const PHONE_ANIMATION_CONTENT_COMPONENTS = {
  [TabId.DocumentScanner]: null,
  [TabId.SignStamp]: SignStampAnimation,
  [TabId.BatchScanning]: BatchScanningAnimation,
  [TabId.AdvancedFilters]: AdvancedFilterAnimation,
  [TabId.ExportShare]: ExportAnimation,
} as const;

export const PhoneFrameSection: FC<PhoneFrameSectionProps> = ({
  activeTab,
}) => {
  const AnimationContentComponent =
    PHONE_ANIMATION_CONTENT_COMPONENTS[activeTab.id];

  return (
    <motion.div
      key={`phone-${activeTab.id}`}
      className={styles.phoneFrameWrapper}
      {...PHONE_TRANSLATE_ANIMATION}
    >
      <PhoneFrame>
        <PhoneScreenImageOverlay screenImage={activeTab.screenContentBaseImage}>
          {AnimationContentComponent && <AnimationContentComponent />}
        </PhoneScreenImageOverlay>
      </PhoneFrame>
    </motion.div>
  );
};
