import React, { useState, useCallback, useMemo } from 'react';
import styles from './FeatureTabs.module.css';
import { FEATURE_TABS } from '@/shared/constants/featureTabs';
import { Tab, TabId } from '@/shared/types';
import { TabButton } from './ui';

export interface FeatureTabsProps {
  onTabChange?: (tab: Tab) => void;
}

export const FeatureTabs: React.FC<FeatureTabsProps> = ({ onTabChange }) => {
  const [activeTabId, setActiveTabId] = useState<TabId>(FEATURE_TABS[0].id);

  const handleTabClick = useCallback(
    (tab: Tab) => {
      setActiveTabId(tab.id);
      onTabChange?.(tab);
    },
    [onTabChange],
  );

  const tabsLength = useMemo(() => FEATURE_TABS.length, []);

  return (
    <div className={styles.tabsContainer}>
      {FEATURE_TABS.map((tab, index) => (
        <TabButton
          key={tab.id}
          tab={tab}
          isActive={activeTabId === tab.id}
          hasDivider={index < tabsLength - 1}
          onClick={handleTabClick}
        />
      ))}
    </div>
  );
};
