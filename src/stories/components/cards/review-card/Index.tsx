'use client';
import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";

export interface CarouselProps {
  sectionTitle?: string;
  cardsData: {
    id: string;
    heroText: string;
    subText: string;
    authorText: string;
  }[];
  className?: string;
}

export const Carousel = ({ sectionTitle, cardsData, className }: CarouselProps) => {
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
    <div className={"section " + className}>
      {sectionTitle && (
        <h2 className="section-header">{sectionTitle}</h2>
      )}
      <div className={styles.carouselContainer}>
        {cards.map((card, index) => {
          let positionClass = "";
          if (index === 0) positionClass = styles.leftCard;
          else if (index === 1) positionClass = styles.centerCard;
          else if (index === 2) positionClass = styles.rightCard;

          return (
            <div key={card.id} className={`${styles.card} ${positionClass}`}>
              <div
                className={styles["header-text"]}
                dangerouslySetInnerHTML={{ __html: card.heroText }}
              />
              <div className={styles["sub-text"]}>{card.subText}</div>
              <div className={styles["author-text"]}>{card.authorText}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
