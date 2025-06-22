import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';

const cardsData = [
  { id: 'a', heroText: 'Professional, reliable, and <b>security-focused</b>. Their expertise <b>transformed</b> our app!', subText: 'Sadia Asad', authorText: 'Branch Manager at CPR' },
  { id: 'b', heroText: 'We couldn’t have <b>navigated</b> headless migration without their <b>clear guidance</b> and insight.', subText: 'Allia Hussein', authorText: 'Founder of Mansion 28' },
  { id: 'c', heroText: 'The <b>growth</b> to SEO and page performance was <b>phenomenal!</b>', subText: 'Ikra Khan', authorText: 'Content Specalist at METRIC GAMER' },
];

export const Carousel = () => {
  const [cards, setCards] = useState(cardsData);


  useEffect(() => {
    const interval = setInterval(() => {
        setTimeout(() => {
          setCards((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
          });
        }, 2000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      {cards.map((card, index) => {
        let positionClass = '';
        if (index === 0) positionClass = styles.leftCard;
        else if (index === 1) positionClass = styles.centerCard;
        else if (index === 2) positionClass = styles.rightCard;

        return (
          <div key={card.id} className={`${styles.card} ${positionClass}`}>
            <div className={styles['header-text']} dangerouslySetInnerHTML={{ __html: card.heroText }} />
            <div className={styles['sub-text']}>{card.subText}</div>
            <div className={styles['author-text']}>{card.authorText}</div>
          </div>
        );
      })}
    </div>
  );
};
