import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';

const cardsData = [
  { id: 'a', heroText: '<b>Card A</b> Hero Text', subText: 'Subtitle A', authorText: 'Author A' },
  { id: 'b', heroText: '<b>Card B</b> Hero Text', subText: 'Subtitle B', authorText: 'Author B' },
  { id: 'c', heroText: '<b>Card C</b> Hero Text', subText: 'Subtitle C', authorText: 'Author C' },
];

export const Carousel = () => {
  const [cards, setCards] = useState(cardsData);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    //Because this is non-ending, we use interval rather than timeout.
    const interval = setInterval(() => {
      //For animation effect.
      setIsAnimating(true);
      
      setTimeout(() => {
        setCards((prev) => {
          //Essentially, what's happening here.
          //We take the first card, seperate it from the array.
          //Then we move the first card to the end of the array.
          //In a pattern, it's like abc, bca, cab, abc.
          const [first, ...rest] = prev;
          return [...rest, first];
        });
      }, 1500); 
      setIsAnimating(false);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.carouselContainer} ${isAnimating ? styles.animating : ''}`}>
      {cards.map((card, index) => {
        let positionClass = '';
        if (index === 0) positionClass = styles.leftCard;
        else if (index === 1) positionClass = styles.centerCard;
        else if (index === 2) positionClass = styles.rightCard;

        return (
          <div key={card.id} className={`${styles.card} ${positionClass}`}>
            <div dangerouslySetInnerHTML={{ __html: card.heroText }} />
            <div>{card.subText}</div>
            <div>{card.authorText}</div>
          </div>
        );
      })}
    </div>
  );
};
