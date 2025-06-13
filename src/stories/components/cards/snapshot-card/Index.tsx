import React from "react";
import styles from "./style.module.scss";
import { PrimaryCTA } from "../../buttons/primary/Index";

//creating Props for Card
export interface SnapshotCardProps {
  title: string;
  challange: string;
  solution: string;
  outcome: string;
  tech: { name: string; subTech: string[] }[];
  cta: { label: string; link: string };
}

/** Primary UI component for user interaction */
export const SnapshotCard = ({
  title,
  challange,
  solution,
  outcome,
  tech,
  cta,
}: SnapshotCardProps) => {
  return (
    <div className={styles["snapshot-card"]}>
      <h2 className={styles["snapshot-title"]}>{title}</h2>
      <div className={styles["tech-section"]}>
        <h3>Tech</h3>

        <ul className={styles["tech-list"]}>
          {tech.map((item, index) => (
            <li key={index} className={styles["tech-row"]}>
              <p className={styles["tech-text"]}>{item.name}:</p>
              <ul className={styles["tech-list"]}>
                {item.subTech.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles["tech-row"]}>
                    <p className={styles["tech-text"]}>{subItem}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["challange-section"]}>
        <h3>Challange</h3>
        <p>{challange}</p>
      </div>
      <div className={styles["solution-section"]}>
        <h3>Solution</h3>
        <p>{solution}</p>
      </div>
      <div className={styles["outcome-section"]}>
        <h3>Outcome</h3>
        <p>{outcome}</p>
      </div>
      <PrimaryCTA cta={cta} style={{ alignSelf: "center"}} />
    </div>
  );
};
