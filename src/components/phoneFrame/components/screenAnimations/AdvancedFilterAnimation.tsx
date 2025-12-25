import { FC } from 'react';
import { motion } from 'framer-motion';
import { PHONE_CONTENT_ANIMATION_DELAY } from '@/shared';
import BrightnessProgressBarImage from '@/shared/assets/images/advancedFilters/brightness-progress-bar.png';
import ContrastProgressBarImage from '@/shared/assets/images/advancedFilters/contrast-progress-bar.png';

export const AdvancedFilterAnimation: FC = () => {
  return (
    <>
      <motion.img
        src={BrightnessProgressBarImage}
        alt="Signature"
        style={{
          position: 'absolute',
          top: '20%',
          zIndex: 3,
          left: '-11%',
          height: '78%',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          delay: PHONE_CONTENT_ANIMATION_DELAY + 0.2,
        }}
      />

      <motion.img
        src={ContrastProgressBarImage}
        alt="Stamp"
        style={{
          position: 'absolute',
          top: '20%',
          zIndex: 3,
          right: '-10%',
          height: '78%',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          delay: PHONE_CONTENT_ANIMATION_DELAY + 0.4,
        }}
      />
    </>
  );
};
