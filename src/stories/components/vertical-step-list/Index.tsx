import React from "react";
import styles from "./style.module.scss";

export interface VerticalStepListProps {
  steps: {
    headerText: string;
    subheaderText: string;
  }[];
  onClick?: () => void;
}

export const VerticalStepList = ({ steps, onClick }: VerticalStepListProps) => {

  return (
      <div className={styles["vertical-step-list-container"]}>
        {steps.map((step, index) => (
          <div className={styles["timeline-container"]} key={index}>
            <div className={styles["circle"]}>{index + 1}</div>
            <div>
              <div className={styles["vertical-step-list-header"]}>
                <b>{step.headerText}</b>
                <div className={styles["vertical-step-list-header-subtitle"]}>
                  <a>{step.subheaderText}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};
