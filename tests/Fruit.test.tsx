```tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Fruit from '../components/Fruit';

describe('Fruit', () => {
  test('renders Fruit component', () => {
    render(<Fruit />);
    expect(screen.getByTestId('fruit')).toBeInTheDocument();
  });

  test('Fruit is positioned correctly', () => {
    const position = { top: 50, left: 50 };
    render(<Fruit position={position} />);
    const fruit = screen.getByTestId('fruit');
    expect(fruit).toHaveStyle(`top: ${position.top}px`);
    expect(fruit).toHaveStyle(`left: ${position.left}px`);
  });
});
```