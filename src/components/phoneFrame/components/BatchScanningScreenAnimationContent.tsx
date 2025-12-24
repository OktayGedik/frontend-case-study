import { motion } from 'framer-motion';
import { BATCH_SCANNING_FILES } from '@/shared/constants/batchScanningFiles';
import { PHONE_CONTENT_ANIMATION_DELAY } from '@/shared/constants/animationConstants';

export const BatchScanningScreenAnimationContent = () => {
  return (
    <>
      {(BATCH_SCANNING_FILES as readonly string[]).map((file, index) => (
        <motion.img
          key={index}
          src={file}
          alt={`Batch scanning page ${index + 1}`}
          style={{
            position: 'absolute',
            top: 80 + index * 10,
            zIndex: index + 1,
            left: `calc(5% + ${(BATCH_SCANNING_FILES.length - 1 - index) * 10}px)`,
          }}
          initial={{ y: '100%', scale: 1.2 }}
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
