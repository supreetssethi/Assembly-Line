import { render, screen, fireEvent } from "@testing-library/react";
import AssemblyLineTasks from "./AssemblyLineTasks";

test("renders Assembly Line tasks", () => {
  render(
    <AssemblyLineTasks
      moveTaskToPreviousStage={() => {}}
      moveTaskToNextStage={() => {}}
      stages={{ Idea: ["new task"], Development: [] }}
    />
  );
  const ideaElement = screen.getByText(/Idea/i);
  const developmentElement = screen.getByText(/Development/i);
  const newTaskElement = screen.getByText(/new task/i);
  expect(ideaElement).toBeInTheDocument();
  expect(developmentElement).toBeInTheDocument();
  expect(newTaskElement).toBeInTheDocument();
});

test("renders Assembly Line tasks and click handlers", () => {
  const moveTaskToPreviousStageHandler = jest.fn();
  const moveTaskToNextStageHandler = jest.fn();
  render(
    <AssemblyLineTasks
      moveTaskToPreviousStage={moveTaskToPreviousStageHandler}
      moveTaskToNextStage={moveTaskToNextStageHandler}
      stages={{ Idea: ["new task"], Development: [] }}
    />
  );
  const newTaskElement = screen.getByText(/new task/i);
  fireEvent.click(newTaskElement);
  expect(moveTaskToNextStageHandler).toHaveBeenCalledTimes(1);
  fireEvent.contextMenu(newTaskElement);
  expect(moveTaskToPreviousStageHandler).toHaveBeenCalledTimes(1);
});
