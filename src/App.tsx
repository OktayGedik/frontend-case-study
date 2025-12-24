import styles from './App.module.css';
import { FeatureTabs } from '@/components/featureTabs';
import React, { useState } from 'react';
import type { Tab } from '@/shared/types';
import { FEATURE_TABS } from '@/shared/constants';
import { FeatureHeroContent, PhoneFrame } from '@/components';

export function App() {
  const [activeTab, setActiveTab] = useState<Tab>(FEATURE_TABS[0]);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <section className={styles.wrapper}>
          <FeatureHeroContent content={activeTab.content} />
          <div className={styles.phoneFrameWrapper}>
            <PhoneFrame />
          </div>
        </section>
        <FeatureTabs onTabChange={handleTabChange} />
      </div>
    </main>
  );
}
