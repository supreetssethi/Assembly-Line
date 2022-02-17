import React, { useState } from "react";
import "./AssemblyLine.css";
import AssemblyLineTasks from "./AssemblyLineTasks";
import { StageAndTaskList, Task } from "./commonInterfaces";
import NewTask from "./NewTask";
import { addNewTaskToList, mapStageToTaskList } from "./util";

interface AssemblyLineInterface {
  stages: Array<string>;
}

const AssemblyLine = (props: AssemblyLineInterface) => {
  const { stages } = props;
  const [assemblyTasksList, setAssemblyTasksList] = useState<StageAndTaskList>(
    mapStageToTaskList(stages)
  );

  const handleAddNewTask = (newTask: Task) => {
    setAssemblyTasksList(addNewTaskToList(assemblyTasksList, newTask));
  };

  // handled emtpy stages step
  if (!stages.length) return <>There are no stages setup in assembly.</>;

  return (
    <div className="assembly-line">
      <NewTask newTaskHandler={handleAddNewTask} />
      <AssemblyLineTasks
        stages={assemblyTasksList}
        moveTaskToPreviousStage={() => {}}
        moveTaskToNextStage={() => {}}
      />
    </div>
  );
}

export default AssemblyLine;
