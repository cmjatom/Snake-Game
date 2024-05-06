```tsx
import { render, screen } from '@testing-library/react';
import GameBoard from '../components/GameBoard';

describe('GameBoard', () => {
  test('renders GameBoard component', () => {
    render(<GameBoard />);
    expect(screen.getByTestId('game-board')).toBeInTheDocument();
  });

  test('initializes with a snake positioned randomly on the board', () => {
    render(<GameBoard />);
    const snake = screen.getByTestId('snake');
    expect(snake).toBeInTheDocument();
    expect(snake.style.top).not.toBe('');
    expect(snake.style.left).not.toBe('');
  });

  test('displays a fruit item randomly on the board', () => {
    render(<GameBoard />);
    const fruit = screen.getByTestId('fruit');
    expect(fruit).toBeInTheDocument();
    expect(fruit.style.top).not.toBe('');
    expect(fruit.style.left).not.toBe('');
  });
});
```