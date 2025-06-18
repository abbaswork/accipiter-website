import React, { useEffect, useRef } from 'react';
import styles  from './style.module.scss';
import { ProgressRing } from './ProgressRing';

export interface ReactiveCardProps {
  bodyText: [string, string, string];
  seoText: [string, string, string];
}
export interface ProgressRingProps {
  progress?: number;
  setProgress?: (progress: number) => void;
}

let progressInterval = 1;

const headerTabs = [
  { headerText: 'Headless Migration', index: 0 },
  { headerText: 'Ai Integration', index: 1 },
  { headerText: 'Microservices', index: 2 },
];

let flavourText = 'random flavour text';
let progressRingText = 'sampleText';

export const ReactiveCard = ({ bodyText, seoText }: ReactiveCardProps) => {
  const [progress, setProgress] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0); // Track active tab index

function setTheIndex(index: number): void {
  setActiveIndex(index);
  console.log('Active index:', index);

  if (index === 0) {
    progressInterval = 1;
    setProgress(0);
    flavourText = bodyText[0];
    progressRingText = seoText[0];
  }
  if (index === 1) {
    progressInterval = 0.75;
    setProgress(0);
    flavourText = bodyText[1];
  }
  if (index === 2) {
    progressInterval = 0.5;
    setProgress(0);
    flavourText = bodyText[2];
  }
}

  useEffect(() => {
    // Clear any previous timers to prevent overlapping effects
    let timer: NodeJS.Timeout;
    if (progress < 1 * progressInterval) {
      timer = setTimeout(() => {
        if (progress < 0.03 * progressInterval) {
          setProgress(progress + 0.003)
        } else if (progress < 0.6 * progressInterval) {
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
    }
    //cleanup function that runs when the component unmounts or when progress changes
    return () => clearTimeout(timer);
    
  }
  , [progress, progressInterval]);
  return (
    <div className={styles.cardContainer}>
      <ProgressRing 
      progress={progress}
      seoText={seoText[activeIndex]}
      activeIndex={activeIndex}></ProgressRing>

  <div className={styles.cardInteractiveContainer}>
      <div className={styles.cardInteractiveHeader}>
        <span className={styles.cardInteractiveHeaderTabs}>
          {headerTabs.map((item, index) => (
            <span
              key={index}
              className={`${styles.cardInteractiveHeaderTab}
              ${activeIndex === index ? styles.activeTab : ''}`} // Apply active class to active tab
              onClick={() => setTheIndex(index)} // Update activeIndex on click
            >
              {item.headerText}
            </span>
          ))}
        </span>
      </div>
      <div className={styles.cardInteractiveBody}>
        <a>{flavourText}</a>
      </div>
      </div>
    </div>
  );
};
