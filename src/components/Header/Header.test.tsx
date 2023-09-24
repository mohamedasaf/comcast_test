import { render, screen } from '@testing-library/react';
import Header from './Header';

test('should render Header component', () => {
 render(<Header getSearchValue={jest.fn}/>);
  const layoutComponent = screen.getByTestId('header-component');
  expect(layoutComponent).toBeInTheDocument();
});
