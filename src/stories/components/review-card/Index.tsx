import React from 'react';
import styles from './style.module.scss';

export interface ButtonProps {
  
  gradientText?: string;
  heroText?: string;
  subText?: string;
  centerCard?: boolean;
  authorText?: string;
}
/**
 * To bold a certain word in an <a> tag, you can wrap the word with a <strong> tag.
 * For example:
 * <a>
 *   Unlike any <strong>Other</strong> Consultancy
 * </a>
 */
/** Primary UI component for user interaction */
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

        <a style={{ color: "gray", marginTop: "5px" }} > {authorText}</a>
</div>
    </div>

  );
};
