import React from 'react';
import styles  from './card.module.scss';

//creating Props for Card
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is the primary button?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Card = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <>
    <div className={styles.cardTemplate}>
      <div className={styles.cardContainer}>

  
      <h2>
        Metric Gamer
      </h2>
      <a>
        Increasing SEO through AI automation
      </a>
      </div>
    </div>
    
    </>
  );
};
