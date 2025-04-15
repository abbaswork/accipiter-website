import React from 'react';
import styles  from './card.module.scss';

//creating Props for Card
export interface CardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Card = ({}: CardProps) => {

  return (
    <>
    <div className={styles.cardTemplate}>
      <div className={styles.cardContainer}>

  
      <h2>
        Metric Gamer
      </h2>
      <a>
        Increasing SEO through AI automation
      </a>
      </div>
    </div>
    
    </>
  );
};
