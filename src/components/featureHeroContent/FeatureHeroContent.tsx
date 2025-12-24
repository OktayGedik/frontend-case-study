import React, { FC } from 'react';
import { TabContent } from '@/shared/types/tab';
import styles from './FeatureHeroContent.module.css';

export interface FeatureHeroContentProps {
  content: TabContent;
}

export const FeatureHeroContent: FC<FeatureHeroContentProps> = ({
  content,
}) => {
  return (
    <section className={styles.wrapper}>
      <h4 className={styles.title}>{content.title}</h4>
      <h3 className={styles.subTitle}>{content.subTitle}</h3>
      <p className={styles.description}>{content.description}</p>
      <button className={styles.button}>{content.buttonText}</button>
    </section>
  );
};
