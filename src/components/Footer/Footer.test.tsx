import { render, screen } from '@testing-library/react';

import Footer from './Footer';

test('should render Footer component', () => {
 render(<Footer />);
  const layoutComponent = screen.getByTestId('footer-component');
  expect(layoutComponent).toBeInTheDocument();
});
