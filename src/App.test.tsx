import { render, screen } from '@testing-library/react';
import App from './App';

test('should render layout component', () => {
 render(<App />);
  const layoutComponent = screen.getByTestId('layout');
  expect(layoutComponent).toBeInTheDocument();
});
