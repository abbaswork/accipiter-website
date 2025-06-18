import React, { useState } from "react";
import styles from "./card.module.scss";

//creating Props for Card
export interface CardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  headerText: string;
  subHeaderText: string;
  cardType: "Syrian Foundation" | "Metric Gamer";
}

/** Primary UI component for user interaction */
export const Card = ({ cardType, headerText, subHeaderText }: CardProps) => {
  let cardClass = styles.metricGamerTemplate;

  if (cardType === "Syrian Foundation") {
    cardClass = styles.syrianFoundationTemplate;
  }

  if (cardType == "Metric Gamer") {
    cardClass = styles.metricGamerTemplate;
  }

  return (
    <>
      <div className={`${styles.cardTemplate} ${cardClass}`}>
        <div className={styles.cardContainer}>
          <h2 className={styles.cardHeader}>
            <strong>{headerText}</strong>
          </h2>
          <a>{subHeaderText}</a>
        </div>
      </div>
    </>
  );
};
