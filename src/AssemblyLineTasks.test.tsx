import { render, screen } from "@testing-library/react";
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
