import React from "react";
import styles from "./style.module.scss";

//creating Props for Card
export interface SnapshotCardProps {}

/** Primary UI component for user interaction */
export const SnapshotCard = ({}: SnapshotCardProps) => {
  return (
    <div className={styles["snapshot-card"]}>
      <h2 className={styles["snapshot-title"]}>Case Study Snapshot</h2>
      <div className={styles["tech-section"]}>
        <h3>Tech</h3>
        <div className={styles["tech-row"]}>
          <div className={styles["tech-icon"]}></div>
          <p className={styles["tech-text"]}>
            <span className={styles["tech-pointer"]}>{">"}</span>EC2
          </p>
        </div>
      </div>
      <div className={styles["challange-section"]}>
        <h3>Tech</h3>
        <p>Downtrend in SEO despite best practices.</p>
      </div>
      <div className={styles["solution-section"]}>
        <h3>Tech</h3>
        <p>Implementation of microservices through AWS and related tech.</p>
      </div>
      <div className={styles["outcome-section"]}>
        <h3>Tech</h3>
        <p>100% increase in SEO performance.</p>
      </div>
    </div>
  );
};
