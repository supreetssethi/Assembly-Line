import React from 'react';
import { render, screen } from '@testing-library/react';
import AssemblyLine from './AssemblyLine';

test('renders Assembly Line component with empty stages', () => {
  render(<AssemblyLine stages={[]}/>);
  const headerElement = screen.getByText(/There are no stages setup in assembly./i);
  expect(headerElement).toBeInTheDocument();
});
