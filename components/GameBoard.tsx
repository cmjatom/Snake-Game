```tsx
import React, { useEffect } from 'react';
import { useGameLogic } from '../hooks/useGameLogic';
import Snake from './Snake';
import Fruit from './Fruit';
import styles from '../styles/GameBoard.module.scss';

const GameBoard: React.FC = () => {
  const { gameState, gameActions } = useGameLogic();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          gameActions.changeDirection('UP');
          break;
        case 'ArrowDown':
          gameActions.changeDirection('DOWN');
          break;
        case 'ArrowLeft':
          gameActions.changeDirection('LEFT');
          break;
        case 'ArrowRight':
          gameActions.changeDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameActions]);

  return (
    <div id="game-board" className={styles.gameBoard}>
      <Snake snakeDots={gameState.snakeDots} />
      <Fruit dot={gameState.fruitDot} />
    </div>
  );
};

export default GameBoard;
```