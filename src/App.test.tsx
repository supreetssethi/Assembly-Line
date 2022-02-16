import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Assembly Line', () => {
  render(<App />);
  const headerElement = screen.getByText(/Assembly Line/i);
  expect(headerElement).toBeInTheDocument();
});
