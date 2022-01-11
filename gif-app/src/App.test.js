import { render, screen } from '@testing-library/react';
import GifSearch from './GifSearch';

test('renders learn react link', () => {
  render(<GifSearch />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
