import { addNewTaskToList, mapStageToTaskList, moveTaskToNextStage, moveTaskToPrevStage, removeTask } from "./util";

test("all the stages and task list is created", () => {
  const inputTotest = ["Idea", "Development"];
  const outputToTest = {
    Idea: [],
    Development: [],
  };
  expect(mapStageToTaskList(inputTotest)).toMatchObject(outputToTest);
});

test("New task is added to the first stage", () => {
  const inputTotest = { Idea: [], Development: [] };
  const outputToTest = {
    Idea: ["new task"],
    Development: [],
  };
  expect(addNewTaskToList(inputTotest, "new task")).toMatchObject(outputToTest);
});

test("removal of a task", () => {
  const inputTotest = {
    Idea: ["task one", "task two", "task 3"],
    Development: ["task 4"],
  };
  const outputToTest = {
    Idea: ["task one", "task 3"],
    Development: ["task 4"],
  };
  expect(removeTask(inputTotest, 1, "Idea")).toMatchObject(outputToTest);
});



test("move task to prev list - remove item from 1st stage", () => {
    const inputTotest = {
      Idea: ["task one", "task two", "task 3"],
      Development: ["task 4"],
    };
    const outputToTest = {
      Idea: ["task one", "task 3"],
      Development: ["task 4"],
    };
    expect(moveTaskToPrevStage(inputTotest, 1, "Idea")).toMatchObject(outputToTest);
  });


test("move task to prev list - move item from other stages", () => {
    const inputTotest = {
      Idea: ["task one", "task two", "task 3"],
      Development: ["task 4"],
    };
    const outputToTest = {
      Idea: ["task one", "task two", "task 3","task 4"],
      Development: [],
    };
    expect(moveTaskToPrevStage(inputTotest, 0, "Development")).toMatchObject(outputToTest);
  });


test("move task to next list - remove item from last stage", () => {
    const inputTotest = {
      Idea: ["task one", "task two", "task 3"],
      Development: ["task 4"],
    };
    const outputToTest = {
        Idea: ["task one", "task two", "task 3"],
        Development: [],
    };
    expect(moveTaskToNextStage(inputTotest, 0, "Development")).toMatchObject(outputToTest);
  });


test("move task to next list - move item from other stages", () => {
    const inputTotest = {
      Idea: ["task one", "task two", "task 3"],
      Development: ["task 4"],
    };
    const outputToTest = {
      Idea: ["task one", "task 3"],
      Development: [ "task two","task 4"],
    };
    expect(moveTaskToNextStage(inputTotest, 1, "Idea")).toMatchObject(outputToTest);
  });