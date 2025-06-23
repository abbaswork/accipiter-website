import React from "react";
import styles from "./style.module.scss";
import { Card } from "./card";

//creating Props for Card
export interface CardRowProps {
  sectionTitle?: string;
  cards: {
    headerText: string;
    subHeaderText: string;
    cardType: "Syrian Foundation" | "Metric Gamer";
  }[];
}

/** Primary UI component for user interaction */
export const CardRow = ({ cards, sectionTitle }: CardRowProps) => {
  return (
    <div className="section">
      {sectionTitle && <h2 className="section-header">{sectionTitle}</h2>}
      <div className={styles["card-row"]}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
