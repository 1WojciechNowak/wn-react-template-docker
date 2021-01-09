import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nowak link', () => {
  render(<App />);
  const linkElement = screen.getByText(/nowak/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders wojciech link', () => {
  render(<App />);
  const linkElement = screen.getByText(/wojciech/i);
  expect(linkElement).toBeInTheDocument();
});
