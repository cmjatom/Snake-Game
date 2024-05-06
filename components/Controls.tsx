```tsx
import React from 'react';
import { gameActions } from '../hooks/useGameLogic';
import styles from '../styles/Controls.module.scss';

const Controls: React.FC = () => {
  const { initializeGame, pauseGame, resumeGame } = gameActions();

  return (
    <div id="controls" className={styles.controls}>
      <button onClick={initializeGame} className={styles.button}>
        Start Game
      </button>
      <button onClick={pauseGame} className={styles.button}>
        Pause Game
      </button>
      <button onClick={resumeGame} className={styles.button}>
        Resume Game
      </button>
    </div>
  );
};

export default Controls;
```