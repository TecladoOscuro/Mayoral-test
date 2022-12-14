import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ShirtsList } from '../../../src/components/shirts';

describe('ShirtsList tests', () => {
  const onFilter = jest.fn();
  it('should render ShirtsList correctly', () => {
    render(<ShirtsList onFilter={onFilter} />);
    expect(screen.getByTestId('ShirtsList')).toBeInTheDocument();
  });

  it('should render mobile view divider', () => {
    render(<ShirtsList onFilter={onFilter} />);
    fireEvent.click(screen.getByTestId('mobile-view-btn'));

    expect(screen.getByTestId('mobile-view-divider')).toBeInTheDocument();
  });
  it('should change to mobile view and go back to desktop view', () => {
    render(<ShirtsList onFilter={onFilter} />);
    fireEvent.click(screen.getByTestId('mobile-view-btn'));
    expect(screen.getByTestId('mobile-view-divider')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('desktop-view-btn'));
    expect(screen.getByTestId('mobile-view-divider')).not.toBeInTheDocument();
  });

  it('should not render any card', () => {
    //mock api call to test if data-not-found component is rendered ** in this technical test we get the information through a local json
  });
});
