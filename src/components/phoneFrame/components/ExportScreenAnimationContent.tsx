import { FC } from 'react';
import RightArrowImage from '@/shared/assets/images/exportShare/right-arrow.png';
import PdfImage from '@/shared/assets/images/exportShare/pdf.png';
import JpgImage from '@/shared/assets/images/exportShare/jpg.png';
import TxtImage from '@/shared/assets/images/exportShare/txt.png';
import { motion } from 'framer-motion';
import { PHONE_CONTENT_ANIMATION_DELAY } from '@/shared';

const EXPORT_ITEMS = [
  {
    src: RightArrowImage,
    alt: 'Right Arrow',
    width: 'clamp(16px, 5vw, 20px)',
    height: 'auto',
    finalBottom: '0%',
    finalLeft: '-13%',
    delay: PHONE_CONTENT_ANIMATION_DELAY ,
  },
  {
    src: PdfImage,
    alt: 'PDF Format',
    width: 'clamp(60px, 30vw, 110px)',
    height: 'auto',
    finalBottom: '0%',
    finalLeft: '-10%',
    delay: PHONE_CONTENT_ANIMATION_DELAY + 0.3,
  },
  {
    src: JpgImage,
    alt: 'JPG Format',
    width: 'clamp(60px, 30vw, 110px)',
    height: 'auto',
    finalBottom: '8%',
    finalLeft: '28%',
    delay: PHONE_CONTENT_ANIMATION_DELAY + 0.5,
  },
  {
    src: TxtImage,
    alt: 'TXT Format',
    width: 'clamp(60px, 30vw, 110px)',
    height: 'auto',
    finalBottom: '0%',
    finalLeft: '73%',
    delay: PHONE_CONTENT_ANIMATION_DELAY + 0.7,
  },
];

export const ExportScreenAnimationContent: FC = () => {
  return (
    <>
      {EXPORT_ITEMS.map((item, index) => (
        <motion.img
          key={index}
          src={item.src}
          alt={item.alt}
          style={{
            position: 'absolute',
            width: item.width,
            height: item.height,
            zIndex: 3,
          }}
          initial={{
            bottom: 0,
            left: '50%',
            top: 'auto',
            transform: 'translateX(-50%) translateY(130%)',
          }}
          animate={{
            bottom: item.finalBottom,
            left: item.finalLeft,
            transform: 'translateX(0) translateY(0)',
          }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            delay: item.delay,
          }}
        />
      ))}
    </>
  );
};
