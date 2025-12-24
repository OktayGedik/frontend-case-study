import React from 'react';
import clsx from 'clsx';
import styles from './TabButton.module.css';
import type { Tab } from '@/shared/types';

interface TabButtonProps {
  tab: Tab;
  isActive: boolean;
  hasDivider: boolean;
  onClick: (tab: Tab) => void;
}

const BORDER_CIRCLE_SVG = (
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
);

export const TabButton: React.FC<TabButtonProps> = ({
  tab,
  isActive,
  hasDivider,
  onClick,
}) => {
  const buttonClassName = clsx(
    styles.tabButton,
    isActive && styles.active,
    hasDivider && styles.withDivider,
  );

  return (
    <button
      key={tab.id}
      className={buttonClassName}
      onClick={() => onClick(tab)}
      aria-selected={isActive}
      role="tab"
    >
      <div className={styles.tabIcon}>
        {BORDER_CIRCLE_SVG}
        <tab.icon width="24" height="24" />
      </div>
      <span className={styles.tabLabel}>{tab.label}</span>
    </button>
  );
};
