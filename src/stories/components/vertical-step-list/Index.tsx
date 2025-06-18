import React from 'react';
import styles  from './style.module.scss';

export interface ButtonProps {
  onClick?: () => void;
}



export const VerticalStepList = ({
  
}) => {
  
let x = [   {
    headerText: 'Precision Integration',
    subheaderText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
    {
    headerText: 'Seamless Collaboration',
    subheaderText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    headerText: 'Future Thinking',
    subheaderText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    headerText: 'Agile Approach',
    subheaderText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

  return (
    <>
      <div className={styles['vertical-step-list-container']} >
{x.map((step, index) => (
    <div className={styles['timeline-container']} key={index}>
      <div className={styles['circle']}>
        {index + 1}
      </div>
      <div>
        <div className={styles['vertical-step-list-header']}>
          <b>
            {step.headerText}
          </b>
          <div className={styles['vertical-step-list-header-subtitle']}>
            <a>
              {step.subheaderText}
            </a>
          </div>
        </div>
      </div>
      </div>
))}
</div>
</>
)}