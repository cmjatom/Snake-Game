```tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from '../components/Controls';

describe('Controls Component', () => {
  let mockGameActions;

  beforeEach(() => {
    mockGameActions = {
      initializeGame: jest.fn(),
      pauseGame: jest.fn(),
      resumeGame: jest.fn(),
      restartGame: jest.fn(),
    };
  });

  it('should render without crashing', () => {
    const { getByTestId } = render(<Controls gameActions={mockGameActions} />);
    expect(getByTestId('controls')).toBeInTheDocument();
  });

  it('should call initializeGame when start button is clicked', () => {
    const { getByText } = render(<Controls gameActions={mockGameActions} />);
    fireEvent.click(getByText('Start'));
    expect(mockGameActions.initializeGame).toHaveBeenCalled();
  });

  it('should call pauseGame when pause button is clicked', () => {
    const { getByText } = render(<Controls gameActions={mockGameActions} />);
    fireEvent.click(getByText('Pause'));
    expect(mockGameActions.pauseGame).toHaveBeenCalled();
  });

  it('should call resumeGame when resume button is clicked', () => {
    const { getByText } = render(<Controls gameActions={mockGameActions} />);
    fireEvent.click(getByText('Resume'));
    expect(mockGameActions.resumeGame).toHaveBeenCalled();
  });

  it('should call restartGame when restart button is clicked', () => {
    const { getByText } = render(<Controls gameActions={mockGameActions} />);
    fireEvent.click(getByText('Restart'));
    expect(mockGameActions.restartGame).toHaveBeenCalled();
  });
});
```