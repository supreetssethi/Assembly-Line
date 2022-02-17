import React, { useState } from "react";
import "./AssemblyLine.css";
import { StageAndTaskList, Task } from "./commonInterfaces";
import NewTask from "./NewTask";
import { mapStageToTaskList } from "./util";

interface AssemblyLineInterface {
  stages: Array<string>;
}

function AssemblyLine(props: AssemblyLineInterface) {
  const { stages } = props;
  const [assemblyTasksList, setAssemblyTasksList] = useState<StageAndTaskList>(mapStageToTaskList(stages));
 
  const handleAddNewTask = (newTask:Task) => {
  }
  // handled emtpy stages step
  if (!stages.length) return <>There are no stages setup in assembly.</>;
  return (
    <div className="assembly-line">
      <NewTask newTaskHandler={(task: Task)=>{console.log(task)}}/>
      <div className="stages">
        {Object.keys(assemblyTasksList).map((stage)=>(
           <div key={stage} className="stage">
           <h2>{stage}</h2>
           <div className="task-list">
              {assemblyTasksList[stage].map((taskItem, index) => (
                <div key={index}>task</div>
              ))}
            </div>
           </div>
        ))}
      </div>
    </div>
  );
}

export default AssemblyLine;
