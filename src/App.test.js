import { render, screen } from '@testing-library/react';
import App from './App';

test('Does something', () => {
  render(<App />);
  const linkElement = screen.getByText("Welcome to my Sweet Login Page!");
  expect(linkElement).toBeInTheDocument();
});
