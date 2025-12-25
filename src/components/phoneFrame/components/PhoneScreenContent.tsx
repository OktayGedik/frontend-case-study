import { FC, PropsWithChildren } from 'react';
import styles from './PhoneScreenContent.module.css';

export interface PhoneScreenContentProps {
  screenImage?: string | undefined;
}

export const PhoneScreenContent: FC<
  PropsWithChildren<PhoneScreenContentProps>
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
