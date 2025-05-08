import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss';

export interface ProgressRingProps {
  progress?: number;
  setProgress?: (progress: number) => void;
  seoText: string;
}


export const ProgressRing = ({ progress = 1, seoText }: ProgressRingProps) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const SIZE = 192;
  const STROKE = 16;
  const RADIUS = (SIZE - STROKE) / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  useEffect(() => {
    const offset = CIRCUMFERENCE * (1 - progress);
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = offset.toString();
    }
  }, [progress]);

  return (
    <div className="progress-ring-container">
      <svg width={SIZE} height={SIZE}>

        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffb347" />
            <stop offset="100%" stopColor="#ff6600" />
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

        {/* Animated progress ring */}<svg>
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
              transition: "stroke-dashoffset ease-in-out cubic-bezier(0.4, 2, 0.75, 1)",
            }}
            transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className={styles.progressRingPercentage}
            style={{ fontSize: '2.5rem', fontWeight: 'bold', fill: '#fff' }}
          >
            {Math.round(progress * 100)}%
          </text>

          <text
            x="50%"
            y="60%"  // Slightly below the percentage
            textAnchor="middle"
            dominantBaseline="middle"
            className={styles.progressRingText}
            style={{ fontSize: '1rem', fill: '#fff' }}
          >
            {seoText}
          </text>
        </svg>
      </svg>

    </div>
  );
}
