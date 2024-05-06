```tsx
import { render, fireEvent } from '@testing-library/react';
import { Snake } from '../components/Snake';
import { Direction } from '../components/GameBoard';

describe('Snake', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Snake />);
    expect(getByTestId('snake')).toBeInTheDocument();
  });

  it('moves in the correct direction when arrow keys are pressed', () => {
    const { getByTestId } = render(<Snake />);
    const snake = getByTestId('snake');

    fireEvent.keyDown(snake, { key: 'ArrowUp', code: 'ArrowUp' });
    expect(snake.direction).toBe(Direction.Up);

    fireEvent.keyDown(snake, { key: 'ArrowDown', code: 'ArrowDown' });
    expect(snake.direction).toBe(Direction.Down);

    fireEvent.keyDown(snake, { key: 'ArrowLeft', code: 'ArrowLeft' });
    expect(snake.direction).toBe(Direction.Left);

    fireEvent.keyDown(snake, { key: 'ArrowRight', code: 'ArrowRight' });
    expect(snake.direction).toBe(Direction.Right);
  });

  it('increases in length when a fruit is consumed', () => {
    const { getByTestId } = render(<Snake />);
    const snake = getByTestId('snake');

    const initialLength = snake.length;
    snake.consumeFruit();
    expect(snake.length).toBe(initialLength + 1);
  });

  it('ends the game when it collides with the board boundaries or itself', () => {
    const { getByTestId } = render(<Snake />);
    const snake = getByTestId('snake');

    snake.move(Direction.Up);
    expect(snake.isGameOver).toBe(false);

    snake.move(Direction.Down);
    expect(snake.isGameOver).toBe(true);
  });
});
```