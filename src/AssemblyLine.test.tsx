import { render, screen } from '@testing-library/react';
import AssemblyLine from './AssemblyLine';

test('renders Assembly Line component with empty stages', () => {
  render(<AssemblyLine stages={[]}/>);
  const headerElement = screen.getByText(/There are no stages setup in assembly./i);
  expect(headerElement).toBeInTheDocument();
});


test('renders input field and stages', () => {
  render(<AssemblyLine stages={['Idea','Development']}/>);
  const newTaskInput = screen.getByTestId('new-task-input')
  expect(newTaskInput).toBeInTheDocument();
  const ideaElement = screen.getByText(/Idea/i);
  const developmentElement = screen.getByText(/Development/i);
  expect(ideaElement).toBeInTheDocument();
  expect(developmentElement).toBeInTheDocument();
});


