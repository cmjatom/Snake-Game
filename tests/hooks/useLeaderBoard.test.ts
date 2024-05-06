```typescript
import { renderHook, act } from '@testing-library/react-hooks';
import useLeaderBoard from '../../hooks/useLeaderBoard';

describe('useLeaderBoard hook', () => {
  it('should initialize with an empty leaderboard', () => {
    const { result } = renderHook(() => useLeaderBoard());

    expect(result.current.leaderBoardState).toEqual([]);
  });

  it('should add a new score to the leaderboard', () => {
    const { result } = renderHook(() => useLeaderBoard());

    act(() => {
      result.current.leaderBoardActions.addScore({ name: 'Test Player', score: 10 });
    });

    expect(result.current.leaderBoardState).toEqual([{ name: 'Test Player', score: 10 }]);
  });

  it('should sort the leaderboard by score in descending order', () => {
    const { result } = renderHook(() => useLeaderBoard());

    act(() => {
      result.current.leaderBoardActions.addScore({ name: 'Player 1', score: 10 });
      result.current.leaderBoardActions.addScore({ name: 'Player 2', score: 20 });
    });

    expect(result.current.leaderBoardState).toEqual([
      { name: 'Player 2', score: 20 },
      { name: 'Player 1', score: 10 },
    ]);
  });

  it('should limit the leaderboard to the top 10 scores', () => {
    const { result } = renderHook(() => useLeaderBoard());

    act(() => {
      for (let i = 1; i <= 15; i++) {
        result.current.leaderBoardActions.addScore({ name: `Player ${i}`, score: i });
      }
    });

    expect(result.current.leaderBoardState.length).toBe(10);
    expect(result.current.leaderBoardState[0]).toEqual({ name: 'Player 15', score: 15 });
  });
});
```