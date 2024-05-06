```tsx
import React from 'react';
import styles from '../styles/Snake.module.scss';

interface SnakeProps {
  snakeDots: number[][];
}

const Snake: React.FC<SnakeProps> = ({ snakeDots }) => {
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        }
        return (
          <div className={styles.snakeDot} key={i} style={style}></div>
        )
      })}
    </div>
  );
}

export default Snake;
```