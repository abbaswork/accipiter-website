'use client';
import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { ProgressRing } from "./ProgressRing";

export interface ProgressRingProps {
  progress?: number;
  setProgress?: (progress: number) => void;
}

export interface ReactiveCardProps {
  tabs: {
    headerText: string;
    progress: number;
    metric: string;
    content: string;
  }[];
}

export const ReactiveCard = ({ tabs }: ReactiveCardProps) => {
  const [progress, setProgress] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);

  function handleTabClick(index: number): void {
    setActiveIndex(index);
    setProgress(0);
  }

  useEffect(() => {
    // Clear any previous timers to prevent overlapping effects
    let timer: NodeJS.Timeout;
    if (progress < 1 * tabs[activeIndex].progress) {
      // const tabProgress = tabs[activeIndex].progress > 1 ? 1 : tabs[activeIndex].progress;
      const tabProgress = tabs[activeIndex].progress;

      timer = setTimeout(() => {
        if (progress < 0.03 * tabProgress) {
          setProgress(progress + 0.003);
        } else if (progress < 0.6 * tabProgress) {
          setProgress(progress + 0.03);
        } else if (progress < 0.7 * tabProgress) {
          setProgress(progress + 0.02);
        } else if (progress < 0.8 * tabProgress) {
          setProgress(progress + 0.01);
        } else if (progress < 0.9 * tabProgress) {
          setProgress(progress + 0.008);
        } else if (progress < 0.97 * tabProgress) {
          setProgress(progress + 0.005);
        } else if (progress < 1 * tabProgress) {
          setProgress(progress + 0.004);
        }
      }, 30);
    }
    //cleanup function that runs when the component unmounts or when progress changes
    return () => clearTimeout(timer);
  }, [progress, activeIndex]);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardComponent}>
        <ProgressRing
          progress={progress}
          seoText={tabs[activeIndex].metric}
          activeIndex={activeIndex}
        />

        <div className={styles.cardInteractiveContainer}>
          <div className={styles.cardInteractiveHeader}>
            <span className={styles.cardInteractiveHeaderTabs}>
              {tabs.map((item, index) => (
                <span
                  key={index}
                  className={`${styles.cardInteractiveHeaderTab} ${
                    activeIndex === index ? styles.activeTab : ""
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {item.headerText}
                </span>
              ))}
            </span>
          </div>
          <div className={styles.cardInteractiveBody}>
            <a>{tabs[activeIndex].content}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
