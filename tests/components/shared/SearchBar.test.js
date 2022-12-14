import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../../../src/components/shared/SearchBar';

describe('SearchBar tests', () => {
  const onFilter = jest.fn();
  it('should render SearchBar correctly', () => {
    render(<SearchBar onFilter={onFilter} />);
    expect(screen.getByTestId('searchBar')).toBeInTheDocument();
  });

  it('should call onFilter when input changes', () => {
    render(<SearchBar onFilter={onFilter} />);
    const input = screen.getByTestId('searchBar-input');
    const value = 'h';
    fireEvent.change(input, { target: { value: value } });
    expect(input.value).toBe(value);
    expect(onFilter).toBeCalled();
  });
});
