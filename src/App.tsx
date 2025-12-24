import styles from './App.module.css';
import { FeatureTabs } from '@/components/featureTabs';
import React, { useCallback, useState } from 'react';
import type { Tab } from '@/shared/types';
import { FEATURE_TABS } from '@/shared/constants';
import { HeroSection, PhoneFrameSection } from '@/components';

// Animation configurations

export function App() {
  const [activeTab, setActiveTab] = useState<Tab>(FEATURE_TABS[0]);

  const handleTabChange = useCallback(
    (tab: Tab) => {
      if (tab.id === activeTab.id) return;
      setActiveTab(tab);
    },
    [activeTab.id],
  );

  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <section className={styles.frameAndHeroContentWrapper}>
          <HeroSection activeTab={activeTab} />
          <PhoneFrameSection activeTab={activeTab} />
        </section>
        <FeatureTabs onTabChange={handleTabChange} />
      </div>
    </main>
  );
}
