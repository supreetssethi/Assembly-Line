import { StageAndTaskList, Task } from "./commonInterfaces";

export const mapStageToTaskList = (stages: Array<string>) => {
  const stageTaskListDict: StageAndTaskList = {};
  stages.map((stage: string) => {
    stageTaskListDict[stage] = [];
  });
  return stageTaskListDict;
};

export const addNewTaskToList = (
  stageTaskListDict: StageAndTaskList,
  newTask: Task
) => {
  const updatedStageTaskList = { ...stageTaskListDict };
  // assuming stageTaskListDict will have minimum one stage
  // assuming the new task would be added to the end of the first list
  let firstStage = Object.keys(updatedStageTaskList)[0];
  updatedStageTaskList[firstStage].push(newTask);
  return updatedStageTaskList;
};
export const moveTaskToNextStage = (
  stageTaskListDict: StageAndTaskList,
  currentTaskIndex: number,
  currentStage: string
) => {
  const updatedStageTaskList = { ...stageTaskListDict };
  let currentTask = updatedStageTaskList[currentStage][currentTaskIndex];
  let stageList = Object.keys(updatedStageTaskList);
  let currentStageIndex = stageList.indexOf(currentStage);
  if (currentStageIndex == stageList.length - 1)
    return removeTask(stageTaskListDict, currentTaskIndex, currentStage);
  else {
    let nextStage = Object.keys(updatedStageTaskList)[currentStageIndex + 1];
    updatedStageTaskList[currentStage].splice(currentTaskIndex, 1);
    updatedStageTaskList[nextStage].unshift(currentTask);
    return updatedStageTaskList;
  }
};

export const moveTaskToPrevStage = (
  stageTaskListDict: StageAndTaskList,
  currentTaskIndex: number,
  currentStage: string
) => {
  const updatedStageTaskList = { ...stageTaskListDict };
  let currentTask = updatedStageTaskList[currentStage][currentTaskIndex];
  let currentStageIndex = Object.keys(updatedStageTaskList).indexOf(
    currentStage
  );
  if (currentStageIndex == 0)
    return removeTask(stageTaskListDict, currentTaskIndex, currentStage);
  else {
    let prevStage = Object.keys(updatedStageTaskList)[currentStageIndex - 1];
    updatedStageTaskList[currentStage].splice(currentTaskIndex, 1);
    updatedStageTaskList[prevStage].push(currentTask);
    return updatedStageTaskList;
  }
};

export const removeTask = (
  stageTaskListDict: StageAndTaskList,
  currentTaskIndex: number,
  currentStage: string
) => {
  const updatedStageTaskList = { ...stageTaskListDict };
  updatedStageTaskList[currentStage].splice(currentTaskIndex, 1);
  return updatedStageTaskList;
};