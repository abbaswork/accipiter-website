import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";

export interface ProgressRingProps {
  progress?: number;
  setProgress?: (progress: number) => void;
  seoText: string;
  activeIndex: number;
}

export const ProgressRing = ({
  progress = 1,
  seoText,
  activeIndex,
}: ProgressRingProps) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const SIZE = 173;
  const STROKE = 16;
  const RADIUS = (SIZE - STROKE) / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  // Clamp the progress for animation
  const clampedProgress = Math.min(progress, 1);

  // Use clampedProgress for the animation
  useEffect(() => {
    const offset = CIRCUMFERENCE * (1 - clampedProgress);
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = offset.toString();
    }
  }, [clampedProgress, CIRCUMFERENCE]);

  //Assigning Color to switch color of gradient depending on tab clicked.
  let endingColor = "#E7B772";

  if (activeIndex == 0) {
    endingColor = "#E7B772";
  } else if (activeIndex == 1) {
    endingColor = "#994B5C";
  } else if (activeIndex == 2) {
    endingColor = "#E18043";
  }

  return (
    <div className={styles["progress-ring-container"]}>
      <svg
        width={SIZE}
        height={SIZE}
        style={{
          backgroundColor: "white",
          borderRadius: "50%",
          boxShadow: "0 0 4px 1px #c44a0a",
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C2581B" />
            <stop offset="100%" stopColor={endingColor} />
          </linearGradient>
        </defs>

        {/* Background ring */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="#fff"
          strokeWidth={STROKE}
          fill="none"
        />

        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="#e0e0e0"
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={0}
        />
        <circle
          ref={circleRef}
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="url(#gradient)"
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.6s cubic-bezier(0.4, 2, 0.75, 1)",
          }}
          filter="url(#glow)"
          transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
        />
        <defs>
          <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="6"
              floodColor="#c44a0a"
              floodOpacity="0.7"
            />
          </filter>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.progressRingPercentage}
        >
          {Math.round(progress * 100)}%
        </text>
        <foreignObject x="10%" y="58%" width="80%" height="30%">
          <div
            // xmlns="http://www.w3.org/1999/xhtml"
            style={{
              // maxWidth: "100px",
              // whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "center",
              color: "#333",
            }}
          >
            {seoText}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};
