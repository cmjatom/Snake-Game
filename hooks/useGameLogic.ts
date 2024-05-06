```typescript
import { useState, useEffect } from 'react';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type GameState = {
  snake: Array<{ x: number; y: number }>;
  fruit: { x: number; y: number };
  direction: Direction;
  score: number;
  gameOver: boolean;
};

const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>({
    snake: [{ x: 5, y: 5 }],
    fruit: { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) },
    direction: 'RIGHT',
    score: 0,
    gameOver: false,
  });

  const moveSnake = (direction: Direction) => {
    // Implement snake movement logic here
  };

  const consumeFruit = () => {
    // Implement fruit consumption logic here
  };

  const checkCollision = () => {
    // Implement collision detection logic here
  };

  const initializeGame = () => {
    setGameState({
      snake: [{ x: 5, y: 5 }],
      fruit: { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) },
      direction: 'RIGHT',
      score: 0,
      gameOver: false,
    });
  };

  const updateScore = (newScore: number) => {
    setGameState((prevState) => ({ ...prevState, score: newScore }));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          moveSnake('UP');
          break;
        case 'ArrowDown':
          moveSnake('DOWN');
          break;
        case 'ArrowLeft':
          moveSnake('LEFT');
          break;
        case 'ArrowRight':
          moveSnake('RIGHT');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const gameInterval = setInterval(() => {
      moveSnake(gameState.direction);
      checkCollision();
      consumeFruit();
    }, 200);

    if (gameState.gameOver) {
      clearInterval(gameInterval);
    }

    return () => {
      clearInterval(gameInterval);
    };
  }, [gameState]);

  return {
    gameState,
    gameActions: {
      initializeGame,
      moveSnake,
      consumeFruit,
      checkCollision,
      updateScore,
    },
  };
};

export default useGameLogic;
```