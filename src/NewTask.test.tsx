import { render, screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import NewTask from './NewTask';
import { Task } from './commonInterfaces';

test('renders New task input', () => {
  render(<NewTask newTaskHandler={()=>{}}/>);
  const newTaskInput = screen.getByTestId('new-task-input')
  expect(newTaskInput).toBeInTheDocument();
});



test('new task handler to handle input change', () => {
  render(<NewTask newTaskHandler={()=>{}}/>);
  const newTaskInput = screen.getByTestId('new-task-input')
  fireEvent.change(newTaskInput, {target: {value: '23'}})
  // @ts-ignore
  expect(newTaskInput.value).toBe('23')
});


test('new task handler to handle input change and keyboard enter', () => {
  const handleEnter = jest.fn()
  render(<NewTask newTaskHandler={handleEnter}/>);
  const newTaskInput = screen.getByTestId('new-task-input')
  fireEvent.change(newTaskInput, {target: {value: '23'}})
  fireEvent.keyDown(newTaskInput, {key: 'Enter', code: 'Enter', charCode: 13})
  expect(handleEnter).toHaveBeenCalledTimes(1)
});



test('new task handler to handle input change and keyboard enter empty value', () => {
  const handleEnter = jest.fn()
  render(<NewTask newTaskHandler={handleEnter}/>);
  const newTaskInput = screen.getByTestId('new-task-input')
  fireEvent.change(newTaskInput, {target: {value: ''}})
  fireEvent.keyDown(newTaskInput, {key: 'Enter', code: 'Enter', charCode: 13})
  expect(handleEnter).toHaveBeenCalledTimes(0)
});
