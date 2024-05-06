```typescript
import { renderHook, act } from '@testing-library/react-hooks';
import useGameLogic from '../../hooks/useGameLogic';

describe('useGameLogic', () => {
  it('should initialize game state correctly', () => {
    const { result } = renderHook(() => useGameLogic());

    expect(result.current.gameState).toEqual({
      snake: expect.any(Array),
      fruit: expect.any(Object),
      direction: expect.any(String),
      score: 0,
      gameOver: false,
    });
  });

  it('should handle direction change correctly', () => {
    const { result } = renderHook(() => useGameLogic());

    act(() => {
      result.current.gameActions.changeDirection('Up');
    });

    expect(result.current.gameState.direction).toBe('Up');
  });

  it('should handle fruit consumption correctly', () => {
    const { result } = renderHook(() => useGameLogic());

    act(() => {
      result.current.gameActions.consumeFruit();
    });

    expect(result.current.gameState.score).toBe(1);
    expect(result.current.gameState.snake.length).toBeGreaterThan(1);
  });

  it('should handle game over correctly', () => {
    const { result } = renderHook(() => useGameLogic());

    act(() => {
      result.current.gameActions.gameOver();
    });

    expect(result.current.gameState.gameOver).toBe(true);
  });
});
```