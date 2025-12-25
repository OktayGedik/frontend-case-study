import { FC } from 'react';
import { motion } from 'framer-motion';
import SignImage from '@/shared/assets/images/signStamp/sign.png';
import StampImage from '@/shared/assets/images/signStamp/stamp.png';
import { PHONE_CONTENT_ANIMATION_DELAY } from '@/shared';
export const SignStampAnimation: FC = () => {
  return (
    <>
      <motion.img
        src={SignImage}
        alt="Signature"
        style={{
          position: 'absolute',
          top: 205,
          zIndex: 3,
          left: '-30%',
          width: '60%',
        }}
        initial={{ y: '100%', scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          delay: PHONE_CONTENT_ANIMATION_DELAY + 0.2,
        }}
      />

      <motion.img
        src={StampImage}
        alt="Stamp"
        style={{
          position: 'absolute',
          top: 95,
          zIndex: 3,
          right: '-30%',
          width: '60%',
        }}
        initial={{ y: '100%', scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          delay: PHONE_CONTENT_ANIMATION_DELAY + 0.4,
        }}
      />
    </>
  );
};
