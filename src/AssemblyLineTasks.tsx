import React from "react";
import { StageAndTaskList } from "./commonInterfaces";
import TaskItem from "./TaskItem";
interface AssemblyLineTasksInterface {
  stages:StageAndTaskList;
  moveTaskToNextStage:Function;
  moveTaskToPreviousStage:Function;
}
const AssemblyLineTasks = (props: AssemblyLineTasksInterface) => {
  const { stages } = props;
  return (
      <div className="stages">
        {Object.keys(stages).map((stage)=>(
           <div key={stage} className="stage">
           <h2>{stage}</h2>
           <div className="task-list">
              {stages[stage].map((taskItem, index) => (
                <TaskItem 
                key={index} 
                task={taskItem} 
                triggerLeftClick={()=>{}}
                triggerRightClick={()=>{}}/>
              ))}
            </div>
           </div>
        ))}
      </div>
  );
}

export default AssemblyLineTasks;
