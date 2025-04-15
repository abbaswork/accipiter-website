import React, { useState } from 'react';
import styles from './card.module.scss';

//creating Props for Card
export interface CardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  headerText?: string;
  subHeaderText?: string;
  cardType?: 'Syrian Foundation' | 'Metric Gamer';
}

/** Primary UI component for user interaction */
export const Card = ({ cardType, headerText, subHeaderText }: CardProps) => {
  let cardClass = styles.metricGamerTemplate;



  if (cardType === 'Syrian Foundation') {
    cardClass = styles.syrianFoundationTemplate;
  }

  if (cardType == 'Metric Gamer') {
    cardClass = styles.metricGamerTemplate;
  }

  return (
    <>
      <div className={`${styles.cardTemplate} ${cardClass}`}>
        <div className={styles.cardContainer}>

          <div style={{ margin: '1.75rem 1.75rem' }}>
            <h2>
              {headerText}
            </h2>
          </div>
          <div style={{ lineHeight: '24px', margin: '1.75rem 1.75rem', fontSize: '1.1rem'  }}>
            <a>
              {subHeaderText}
            </a>
          </div>
        </div>
      </div>

    </>
  );
};
