import { render, screen,fireEvent } from '@testing-library/react';
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


test('adding input field to add in a first stage', () => {
  render(<AssemblyLine stages={['Idea','Development']}/>);
  const newTaskInput = screen.getByTestId('new-task-input')
  fireEvent.change(newTaskInput, {target: {value: 'taskOne'}})
  fireEvent.keyDown(newTaskInput, {key: 'Enter', code: 'Enter', charCode: 13})
  const taskOneElement = screen.getByText(/taskOne/i);
  const stageElement = taskOneElement?.parentNode?.parentElement;
  expect(stageElement?.getAttribute('data-stage-name')).toBe('Idea');
});



test('click event on task item', () => {
  render(<AssemblyLine stages={['Idea','Development']}/>);
  const newTaskInput = screen.getByTestId('new-task-input')
  fireEvent.change(newTaskInput, {target: {value: 'taskOne'}})
  fireEvent.keyDown(newTaskInput, {key: 'Enter', code: 'Enter', charCode: 13})
  const taskOneElement = screen.getByText(/taskOne/i);
  fireEvent.click(taskOneElement);
  const newTaskOneElement = screen.getByText(/taskOne/i);
  const stageElement = newTaskOneElement?.parentNode?.parentElement;
  expect(stageElement?.getAttribute('data-stage-name')).toBe('Development');
});

test('context menu event on task item should remove task', async () => {
  render(<AssemblyLine stages={['Idea','Development']}/>);
  const newTaskInput = screen.getByTestId('new-task-input')
  fireEvent.change(newTaskInput, {target: {value: 'taskOne'}})
  fireEvent.keyDown(newTaskInput, {key: 'Enter', code: 'Enter', charCode: 13})
  const taskOneElement = screen.getByText(/taskOne/i);
  fireEvent.contextMenu(taskOneElement);
  const updatedTaskOneElement = screen.queryByText('taskOne')
  expect(updatedTaskOneElement).toBeNull() // it doesn't exist
  });


