import React, { useEffect, useRef } from 'react';
import styles  from './style.module.scss';

export interface ReactiveCardProps {
  bodyText?: string;
  headerText: string;
}
export interface ProgressRingProps {
  progress?: number;
  setProgress?: (progress: number) => void;
}


export const ReactiveCard = ({bodyText, headerText}: ReactiveCardProps, ) => {
// Animate from 0 to 100%
const [progress, setProgress] = React.useState(0);

useEffect(() => {
  setTimeout(() => {
    if (progress < 100) {
      setProgress(progress + 1);
    }
  }, 50);
}, [progress]);

  return (
    <div className={styles.cardContainer}>
      <ProgressRing progress={progress}></ProgressRing>
      <div className={styles.cardInteractiveHeader}>
      <span>
        {headerText}
      </span>
    
      </div>
      <div className={styles.cardInteractiveBody}>
        <a>{bodyText}</a>
        </div>
    </div>
  );
};



export default function ProgressRing({ progress = 1}: ProgressRingProps) {
  const circleRef = useRef<SVGCircleElement>(null);
  const SIZE = 192;
  const STROKE = 16;
  const RADIUS = (SIZE - STROKE) / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  useEffect(() => {
    const offset = CIRCUMFERENCE * progress;
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
            transition: "stroke-dashoffset 1s ease-in-out cubic-bezier(0.4, 2, 0.75, 1)",
          }}
          transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
        />
     </svg>
      </svg>
      <div className="progress-ring-text">
        <div className="progress-ring-percentage" style={{color: 'white',
           position: 'absolute',
           top: '50%',
           left: '50%',
           transform: 'translate(-50%, -50%)',
        }}>{Math.round(progress * 1)}%</div>
      </div>
    </div>
  );
}
