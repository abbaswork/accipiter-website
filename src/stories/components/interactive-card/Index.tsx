import React, { useEffect, useRef } from 'react';
import styles  from './style.module.scss';
import { ProgressRing } from './ProgressRing';

export interface ReactiveCardProps {
  headerTabs: string[];
  bodyText: string[];
  seoText: string[];
  progressIntervals: number[];
}

export interface ProgressRingProps {
  progress?: number;
  setProgress?: (progress: number) => void;
}

export const ReactiveCard = ({ bodyText, seoText, headerTabs, progressIntervals }: ReactiveCardProps) => {
  const [progress, setProgress] = React.useState(0); // Track progress animation
  const [activeIndex, setActiveIndex] = React.useState(0); // Track active tab
  const progressInterval = progressIntervals[activeIndex]; // Get the progress interval for the active tab

  //stepping thriough tabs logic
  function setTheIndex(index: number): void {
    setActiveIndex(index);
    setProgress(0);
  }

  // animation progress logic
  useEffect(() => {
    setTimeout(() => {
      if (progress < 0.6 * progressInterval) {
        setProgress(progress + 0.03);
      } else if (progress < 0.7 * progressInterval) {
        setProgress(progress + 0.02);
      } else if (progress < 0.8 * progressInterval) {
        setProgress(progress + 0.01);
      } else if (progress < 0.9 * progressInterval) {
        setProgress(progress + 0.008);
      } else if (progress < 0.97 * progressInterval) {
        setProgress(progress + 0.005);
      } else if (progress < 1 * progressInterval) {
        setProgress(progress + 0.0004);
      }
    }, 50);
  }, [progress]);

  return (
    <div className={styles.cardContainer}>
      <ProgressRing
        progress={progress}
        seoText={seoText[activeIndex]}
      />

      <div className={styles.cardInteractiveContainer}>
        <div className={styles.cardInteractiveHeader}>
          <span className={styles.cardInteractiveHeaderTabs}>
            {headerTabs.map((item, index) => (
              <span
                key={index}
                // Apply active class to active tab
                className={`${styles.cardInteractiveHeaderTab}${activeIndex === index ? styles.activeTab : ""}`}
                onClick={() => setTheIndex(index)} // Update activeIndex on click
              >
                {item}
              </span>
            ))}
          </span>
        </div>
        <div className={styles.cardInteractiveBody}>
          <p>{bodyText[activeIndex]}</p>
        </div>
      </div>
    </div>
  );
};
