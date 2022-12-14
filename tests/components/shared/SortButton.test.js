import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SortButton from '../../../src/components/shared/SortButton';

describe('SortButton tests', () => {
  const onSort = jest.fn();
  it('should render SortButton correctly', () => {
    render(<SortButton onSort={onSort} />);
    expect(screen.getByTestId('SortButton')).toBeInTheDocument();
  });

  it('should call onSort when input changes', () => {
    render(<SortButton onSort={onSort} />);
    const input = screen.getByTestId('SortButton-input');
    const value = 'h';
    fireEvent.change(input, { target: { value: value } });
    expect(input.value).toBe(value);
    expect(onSort).toBeCalled();
  });
});
