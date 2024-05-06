```tsx
import { render, screen } from '@testing-library/react';
import LeaderBoard from '../components/LeaderBoard';

describe('LeaderBoard Component', () => {
  test('renders without crashing', () => {
    render(<LeaderBoard />);
    const leaderboardElement = screen.getByTestId('leader-board');
    expect(leaderboardElement).toBeInTheDocument();
  });

  test('displays player scores', () => {
    const mockScores = [
      { name: 'Player 1', score: 10 },
      { name: 'Player 2', score: 8 },
    ];
    render(<LeaderBoard scores={mockScores} />);
    const scoreElements = screen.getAllByTestId('player-score');
    expect(scoreElements.length).toBe(2);
  });

  test('sorts scores in descending order', () => {
    const mockScores = [
      { name: 'Player 1', score: 10 },
      { name: 'Player 2', score: 15 },
      { name: 'Player 3', score: 12 },
    ];
    render(<LeaderBoard scores={mockScores} />);
    const scoreElements = screen.getAllByTestId('player-score');
    expect(scoreElements[0].textContent).toBe('Player 2: 15');
    expect(scoreElements[1].textContent).toBe('Player 3: 12');
    expect(scoreElements[2].textContent).toBe('Player 1: 10');
  });
});
```