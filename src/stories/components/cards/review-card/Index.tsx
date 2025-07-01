import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
//The carousel just requires min.5 cards to work smoothly. If more cards 
//are to be added, we can just start by by replacing the existing cards.
const cardsData = [
  { id: 'a', heroText: 'Professional, reliable, and <b>security-focused</b>. Their expertise <b>transformed</b> our app!', subText: 'Sadia Asad', authorText: 'Branch Manager at CPR' },
  { id: 'b', heroText: 'We couldn’t have <b>navigated</b> headless migration without their <b>clear guidance</b> and insight.', subText: 'Allia Hussein', authorText: 'Founder of Mansion 28' },
  { id: 'c', heroText: 'The <b>growth</b> to SEO and page performance was <b>phenomenal!</b>', subText: 'Ikra Khan', authorText: 'Content Specalist at METRIC GAMER' },
  { id: 'a', heroText: 'Professional, reliable, and <b>security-focused</b>. Their expertise <b>transformed</b> our app!', subText: 'Sadia Asad', authorText: 'Branch Manager at CPR' },
  { id: 'b', heroText: 'We couldn’t have <b>navigated</b> headless migration without their <b>clear guidance</b> and insight.', subText: 'Allia Hussein', authorText: 'Founder of Mansion 28' },
];

export const Carousel = () => {
  // Use a state to track the index of the card that should be in the center
  const [centerIndex, setCenterIndex] = useState(0); // Start with the first card in the center
  const totalCards = cardsData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 5000); 
    return () => clearInterval(interval);
  }, [totalCards]);

  return (
    <div className={styles.carouselContainer}>
      {cardsData.map((card, index) => {
        let positionClass = '';
        const totalCards = 5;
        const effectiveIndex = (index - centerIndex + totalCards) % totalCards;
        if (effectiveIndex === 4) {
          positionClass = styles.leftCard;       // 4
        } else if (effectiveIndex === 3) {
          positionClass = styles.hiddenLeft; // 3 
        } else if (effectiveIndex === 0) {
          positionClass = styles.centerCard;     // 0
        } else if (effectiveIndex === 1) {
          positionClass = styles.rightCard;      // 1
        } else if (effectiveIndex === 2) {
          positionClass = styles.hiddenRight;// 2
        }
        return (
          <div key={card.id} className={`${styles.card} ${positionClass}`}>
            <div className={styles['header-text']} dangerouslySetInnerHTML={{__html: card.heroText }} />
            <div className={styles['sub-text']}>{card.subText}</div>
            <div className={styles['author-text']}>{card.authorText}</div>
          </div>
        );
      })}
    </div>
  );
};
