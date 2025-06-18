import React from 'react';
import styles from './style.module.scss';

export interface CardProps {
  heroText?: string;
  subText?: string;
  authorText?: string;
  index?: number;
}

export const ReviewCards = ({heroText, subText,  authorText}: CardProps) => {



return (<div className={styles.reviewCardsContainer}>
<ReviewCard 
 heroText={'<b>Sample G</b> Normal Text'}
 subText={subText}
 authorText={authorText}
 index={0} ></ReviewCard>

<ReviewCard 
index={1}
 heroText={heroText}
 subText={subText}
 authorText={authorText}
 ></ReviewCard>

<ReviewCard 
 heroText={heroText}
 subText={subText}
 authorText={authorText}
 index={2}></ReviewCard>
</div>
)


}

export const ReviewCard = ({ heroText, subText, authorText, index }: CardProps) => {
//Just little index's to differentiate which one is which card.
  let cardClass = styles.centerCard;

if (index === 0) {
  cardClass = styles.leftCardReviewTemplate;
} else if (index === 1) {
  cardClass = styles.centerCardReviewTemplate;
} else if (index === 2) {
  cardClass = styles.rightCardReviewTemplate;
} 

  return (
    <div className={`${styles.cardReviewTemplate} ${cardClass}`}>
      <div className={styles.headerText}>
        <a>
          {heroText ? (
            <span
              // Renders HTML from heroText string
              dangerouslySetInnerHTML={{ __html: heroText }}
            />
          ) : null}
        </a>
      </div>
      <div className={styles.bottomText}>
        <a>
          <strong>  {subText} </strong>
        </a>
        <a style={{ color: "#D4D4d8", marginTop: "5px", fontSize: "14px" }} >{authorText}</a>
      </div>
    </div>
  );
};
