import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from '../../../../src/components/shirts/Card';
import { shirtsList } from '../../../mocks/shirts';

describe('Card tests', () => {
  it('should render Card correctly', () => {
    render(<Card data={shirtsList[0]} />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
