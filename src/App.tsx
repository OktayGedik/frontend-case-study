import styles from './App.module.css';
import { FeatureTabs } from '@/components/featureTabs';
import React, { useState, useCallback } from 'react';
import type { Tab } from '@/shared/types';
import { FEATURE_TABS } from '@/shared/constants';
import { FeatureHeroContent, PhoneFrame } from '@/components';
import { motion, AnimatePresence } from 'framer-motion';

const ANIMATION_DURATION = 0.7;
const HERO_ANIMATION_DELAY = 0;
const PHONE_ANIMATION_DELAY = ANIMATION_DURATION;

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
        <section className={styles.wrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              className={styles.heroContentWrapper}
              key={`hero-${activeTab.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: ANIMATION_DURATION,
                delay: HERO_ANIMATION_DELAY,
              }}
            >
              <FeatureHeroContent content={activeTab.content} />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={`phone-${activeTab.id}`}
              className={styles.phoneFrameWrapper}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{
                duration: ANIMATION_DURATION,
                delay: PHONE_ANIMATION_DELAY,
              }}
            >
              <PhoneFrame />
            </motion.div>
          </AnimatePresence>
        </section>
        <FeatureTabs onTabChange={handleTabChange} />
      </div>
    </main>
  );
}
