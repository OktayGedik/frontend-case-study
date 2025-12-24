import React from 'react';
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
    width: '24px',
    height: '36px',
    finalBottom: 20,
    finalLeft: -35,
    delay: PHONE_CONTENT_ANIMATION_DELAY + 0.2,
  },
  {
    src: PdfImage,
    alt: 'PDF Format',
    width: '111px',
    height: '132px',
    finalBottom: 20,
    finalLeft: 0,
    delay: PHONE_CONTENT_ANIMATION_DELAY + 0.5,
  },
  {
    src: JpgImage,
    alt: 'JPG Format',
    width: '111px',
    height: '132px',
    finalBottom: 40,
    finalLeft: 100,
    delay: PHONE_CONTENT_ANIMATION_DELAY + 0.7,
  },
  {
    src: TxtImage,
    alt: 'TXT Format',
    width: '111px',
    height: '132px',
    finalBottom: 20,
    finalLeft: 210,
    delay: PHONE_CONTENT_ANIMATION_DELAY + 0.9,
  },
];

export const ExportScreenAnimationContent = () => {
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
            transform: 'translateX(-50%) translateY(100%)',
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
