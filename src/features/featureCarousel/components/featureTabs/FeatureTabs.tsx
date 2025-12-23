import React, { useState, useCallback } from 'react';
import styles from './FeatureTabs.module.css';
import { FEATURE_TABS } from './tabs';
import { Tab } from '../../data/types';

interface FeatureTabsProps {
  onTabChange?: (tab: Tab) => void;
}

export const FeatureTabs: React.FC<FeatureTabsProps> = ({ onTabChange }) => {
  const [activeTabId, setActiveTabId] = useState<string>(FEATURE_TABS[0].id);

  const handleTabClick = useCallback(
    (tab: Tab) => {
      setActiveTabId(tab.id);
      onTabChange?.(tab);
    },
    [onTabChange],
  );

  return (
    <div className={styles.tabsContainer}>
      {FEATURE_TABS.map((tab, index) => (
        <button
          key={`tab-${tab.id}-${index}`}
          className={`${styles.tabButton} ${activeTabId === tab.id ? styles.active : ''} ${index < FEATURE_TABS.length - 1 ? styles.withDivider : ''}`}
          onClick={() => handleTabClick(tab)}
          aria-selected={activeTabId === tab.id}
          role="tab"
        >
          <div className={styles.tabIcon}>
            <svg
              className={styles.borderCircle}
              viewBox="0 0 32 32"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
            <tab.icon width="24" height="24" />
          </div>
          <span className={styles.tabLabel}>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};
