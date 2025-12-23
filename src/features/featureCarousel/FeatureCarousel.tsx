import React, { useState } from 'react';
import { FeatureTabs } from './components/featureTabs/FeatureTabs';
import { Tab } from './data/types';
import { FEATURE_TABS } from './components/featureTabs/tabs';
import styles from './FeatureCarousel.module.css';

export const FeatureCarousel = () => {
  const [, setActiveTab] = useState<Tab>(FEATURE_TABS[0]);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.carouselContainer}>
      <FeatureTabs onTabChange={handleTabChange} />
    </div>
  );
};
