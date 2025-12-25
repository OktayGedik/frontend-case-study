import { FC } from 'react';
import { motion } from 'framer-motion';
import { BATCH_SCANNING_FILES } from '@/shared/constants/batchScanningFiles';
import { PHONE_CONTENT_ANIMATION_DELAY } from '@/shared/constants/animationConstants';

export const BatchScanningAnimation: FC = () => {
  return (
    <>
      {BATCH_SCANNING_FILES.map((file, index) => (
        <motion.img
          key={index}
          src={file}
          alt={`Batch scanning page ${index + 1}`}
          style={{
            position: 'absolute',
            top: `${21 + index * 3}%`,
            zIndex: index + 1,
            left: `calc(5% + ${(BATCH_SCANNING_FILES.length - 1 - index) * 12}px)`,
            width: `${70 + index * 10}%`,
          }}
          initial={{ y: '120%', scale: 1.2 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: PHONE_CONTENT_ANIMATION_DELAY + index * 0.4,
          }}
        />
      ))}
    </>
  );
};
