import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Horse Plinko home page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /horse plinko/i, level: 1 })).toBeInTheDocument();
  expect(screen.getByText(/horse plinko news/i)).toBeInTheDocument();
});
