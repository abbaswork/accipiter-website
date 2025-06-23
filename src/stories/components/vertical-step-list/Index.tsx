import React from "react";
import styles from "./style.module.scss";

export interface VerticalStepListProps {
  sectionTitle?: string;
  steps: {
    headerText: string;
    subheaderText: string;
  }[];
  onClick?: () => void;
  style?:  React.CSSProperties;
}

export const VerticalStepList = ({
  steps,
  sectionTitle,
  style
}: VerticalStepListProps) => {
  return (
    <div className="section" style={style}>
      {sectionTitle && <h2 className="section-header">{sectionTitle}</h2>}
      <div className={styles["vertical-step-list-container"]}>
        {steps.map((step, index) => (
          <div
            className={styles["timeline-container"]}
            key={index}
            style={index === (steps.length - 1) ? { padding: 0 } : {}}
          >
            <div className={styles["circle"]}>{index + 1}</div>
            <div>
              <div className={styles["vertical-step-list-header"]}>
                <b>{step.headerText}</b>
                <div className={styles["vertical-step-list-header-subtitle"]}>
                  <a className={styles["subheader-text"]}>{step.subheaderText}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
