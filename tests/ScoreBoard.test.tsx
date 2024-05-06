```tsx
import { render, screen } from '@testing-library/react';
import ScoreBoard from '../components/ScoreBoard';

describe('ScoreBoard Component', () => {
  test('renders ScoreBoard component', () => {
    render(<ScoreBoard />);
    expect(screen.getByTestId('score-board')).toBeInTheDocument();
  });

  test('displays initial score of 0', () => {
    render(<ScoreBoard />);
    const scoreElement = screen.getByText(/score: 0/i);
    expect(scoreElement).toBeInTheDocument();
  });

  test('updates score when gameState changes', () => {
    // Mock gameState and gameActions to simulate a score update
    const mockGameState = { score: 5 };
    const mockGameActions = { updateScore: jest.fn() };
    render(<ScoreBoard gameState={mockGameState} gameActions={mockGameActions} />);
    const scoreElement = screen.getByText(/score: 5/i);
    expect(scoreElement).toBeInTheDocument();
  });
});
```