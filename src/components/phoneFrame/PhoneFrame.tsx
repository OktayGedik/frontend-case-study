import { FC, PropsWithChildren } from 'react';
import styles from './PhoneFrame.module.css';

// SVG imports using SVGR
import FrameSvg from '@/shared/assets/images/phoneFrame/frame.svg?react';
import PhoneFrameBodyDarkSvg from '@/shared/assets/images/phoneFrame/phone-frame-body-dark.svg?react';
import PhoneFrameEdgeHighlightBlueSvg from '@/shared/assets/images/phoneFrame/phone-frame-edge-highlight-blue.svg?react';
import CameraSvg from '@/shared/assets/images/phoneFrame/camera.svg?react';
import EarpieceSpeakerSvg from '@/shared/assets/images/phoneFrame/earpiece-speaker.svg?react';
import TopAntennaSeparatorSvg from '@/shared/assets/images/phoneFrame/top-antenna-separator.svg?react';
import LeftAntennaSeparatorSvg from '@/shared/assets/images/phoneFrame/left-antenna-separator.svg?react';
import RightAntennaSeparatorSvg from '@/shared/assets/images/phoneFrame/right-antenna-separator.svg?react';

export interface PhoneFrameProps {
  showContent?: boolean;
}

export const PhoneFrame: FC<PropsWithChildren<PhoneFrameProps>> = ({
  children,
  showContent = true,
}) => {
  return (
    <div className={styles.phoneFrameContainer}>
      <div className={styles.phoneFrameWrapper}>
        <PhoneFrameBodyDarkSvg className={styles.phoneBodyDark} />
        <FrameSvg className={styles.phoneFrame} />
        <PhoneFrameEdgeHighlightBlueSvg className={styles.phoneEdgeHighlight} />

        {/* Top antenna separators */}
        <TopAntennaSeparatorSvg className={styles.topAntennaRight} />
        {/* Side antenna separators */}
        <LeftAntennaSeparatorSvg className={styles.leftAntennaSeparator} />
        <RightAntennaSeparatorSvg className={styles.rightAntennaSeparator} />

        <CameraSvg className={styles.camera} />
        <EarpieceSpeakerSvg className={styles.earpieceSpeaker} />

        {/* Screen area */}
        {showContent && <div className={styles.screenArea}>{children}</div>}
      </div>
    </div>
  );
};
