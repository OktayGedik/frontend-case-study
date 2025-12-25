import styles from './App.module.css';
import { Tabs } from '@/components/featureTabs';
import React, { useCallback, useState } from 'react';
import type { Tab } from '@/shared/types';
import { FEATURE_TABS } from '@/shared/constants';
import { HeroContent, PhoneFrameSection } from '@/components';

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
          <HeroContent activeTab={activeTab} />
          <PhoneFrameSection activeTab={activeTab} />
        </section>
        <Tabs onTabChange={handleTabChange} />
      </div>
    </main>
  );
}
