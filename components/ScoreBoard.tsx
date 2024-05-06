```tsx
import React from 'react';
import styles from '../styles/ScoreBoard.module.scss';

interface ScoreBoardProps {
  score: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {
  return (
    <div id="score-board" className={styles.scoreBoard}>
      <h2>Score</h2>
      <p>{score}</p>
    </div>
  );
};

export default ScoreBoard;
```