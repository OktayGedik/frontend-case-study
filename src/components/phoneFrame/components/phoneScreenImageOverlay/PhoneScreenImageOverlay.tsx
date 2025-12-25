import { FC, PropsWithChildren } from 'react';
import styles from './PhoneScreenImageOverlay.module.css';

export interface PhoneScreenImageOverlayProps {
  screenImage?: string | undefined;
}

export const PhoneScreenImageOverlay: FC<
  PropsWithChildren<PhoneScreenImageOverlayProps>
> = ({ screenImage, children }) => {
  if (!screenImage) {
    return null;
  }

  return (
    <>
      <img
        src={screenImage}
        alt="Phone screen content"
        className={styles.phoneFrameBaseImage}
      />
      <div>{children}</div>
    </>
  );
};
