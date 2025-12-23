import styles from './App.module.css';
import { FeatureTabs } from '@/components/FeatureTabs';
import React, { useState } from 'react';
import type { Tab } from '@/shared/types';
import { FEATURE_TABS } from '@/shared/constants';

export function App() {
  const [, setActiveTab] = useState<Tab>(FEATURE_TABS[0]);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <FeatureTabs onTabChange={handleTabChange} />
      </div>
    </main>
  );
}
