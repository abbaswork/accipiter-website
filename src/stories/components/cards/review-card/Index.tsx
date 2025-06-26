import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';

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
      // First, set the new index for the next slide. This happens immediately.
      // The CSS transition will then animate the cards to their new positions.
      setCenterIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 5000); // This is the total time for one cycle (animation + pause)
    // No need for setTimeout here if your CSS handles the transition duration.
    // The 2-second animation time needs to be reflected in your CSS `transition-duration`.

    return () => clearInterval(interval);
  }, [totalCards]);

  return (
    <div className={styles.carouselContainer}>
      {cardsData.map((card, index) => {
        let positionClass = '';

        // Calculate positions relative to the current centerIndex
        // For a 3-card carousel, we need to map the card's actual index
        // to its displayed position (left, center, right) relative to centerIndex.

        // Calculate the effective position relative to the center card
        // This makes sure the "left" card is always to the left of the center, etc.
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
        // If you have more than 3 cards, you'd need more complex logic
        // for "farLeft", "farRight", or "hidden" states.
        // For 3 cards, `totalCards - 1` gives the index that will be on the left.

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
