import { FC, PropsWithChildren } from 'react';
import styles from './PhoneFrame.module.css';

// SVG imports using SVGR
import FrameSvg from './assets/frame.svg?react';
import PhoneFrameBodyDarkSvg from './assets/phone-frame-body-dark.svg?react';
import PhoneFrameEdgeHighlightBlueSvg from './assets/phone-frame-edge-highlight-blue.svg?react';
import CameraSvg from './assets/camera.svg?react';
import EarpieceSpeakerSvg from './assets/earpiece-speaker.svg?react';
import TopAntennaSeparatorSvg from './assets/top-antenna-separator.svg?react';
import LeftAntennaSeparatorSvg from './assets/left-antenna-separator.svg?react';
import RightAntennaSeparatorSvg from './assets/right-antenna-separator.svg?react';

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
