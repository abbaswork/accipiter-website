import React from 'react';
import styles from './style.module.scss';

export interface ButtonProps {  
  gradientText: string;
  heroText: string;
  subText: string;
  centerCard: boolean;
  authorText: string;
}

export const ReviewCard = ({heroText, subText, centerCard, authorText
  , gradientText}: ButtonProps) => {
  let cardClass = styles.centerCard

if (centerCard == false) {
  cardClass = styles.cardReviewTemplate
}

  return (
  <div className={`${styles.cardReviewTemplate} ${cardClass}`}>
      <div className={styles.headerText}>
        <a>
          <span className={styles.gradientText}>{gradientText}</span> {heroText}
        </a>
      </div>
      <div className={styles.bottomText}>
        <a>
          <strong>  {subText} </strong>
        </a>
        <a className={styles.authorText} > {authorText}</a>
</div>
    </div>

  );
};
