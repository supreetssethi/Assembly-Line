import { render, screen } from '@testing-library/react';
import NewTask from './NewTask';
import { Task } from './commonInterfaces';

test('renders New task input', () => {
  render(<NewTask newTaskHandler={(task: Task)=>{console.log(task)}}/>);
  const newTaskInput = screen.getByTestId('new-task-input')
  expect(newTaskInput).toBeInTheDocument();
});

