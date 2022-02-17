import React, { useState } from "react";
import "./AssemblyLine.css";
import AssemblyLineTasks from "./AssemblyLineTasks";
import { StageAndTaskList, Task } from "./commonInterfaces";
import NewTask from "./NewTask";
import { addNewTaskToList, mapStageToTaskList, moveTaskToNextStage, moveTaskToPrevStage } from "./util";

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

  const moveTaskToPreviousStageHandler =(stage:string,index:number) => {
    setAssemblyTasksList(moveTaskToPrevStage(assemblyTasksList,index,stage))
  }
  const moveTaskToNextStageHandler =(stage:string,index:number) => {
    setAssemblyTasksList(moveTaskToNextStage(assemblyTasksList,index,stage))
  }
  // handled emtpy stages step
  if (!stages.length) return <>There are no stages setup in assembly.</>;

  return (
    <div className="assembly-line">
      <NewTask newTaskHandler={handleAddNewTask} />
      <AssemblyLineTasks
        stages={assemblyTasksList}
        moveTaskToPreviousStage={(stage:string,index:number) => {moveTaskToPreviousStageHandler(stage,index)}}
        moveTaskToNextStage={(stage:string,index:number) => {moveTaskToNextStageHandler(stage,index)}}
      />
    </div>
  );
}

export default AssemblyLine;
