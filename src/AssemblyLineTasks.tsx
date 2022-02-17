import React from "react";
import { StageAndTaskList } from "./commonInterfaces";
import TaskItem from "./TaskItem";
interface AssemblyLineTasksInterface {
  stages: StageAndTaskList;
  moveTaskToNextStage: Function;
  moveTaskToPreviousStage: Function;
}
const AssemblyLineTasks = (props: AssemblyLineTasksInterface) => {
  const { stages, moveTaskToPreviousStage, moveTaskToNextStage } = props;
  return (
    <div className="stages">
      {Object.keys(stages).map((stage) => (
        <div key={stage} className="stage" data-stage-name={stage}>
          <h2>{stage}</h2>
          <div className="task-list">
            {stages[stage].map((taskItem, index) => (
              <TaskItem
                key={index}
                task={taskItem}
                triggerLeftClick={(e) => {
                  e.preventDefault();
                  moveTaskToNextStage(stage, index);
                }}
                triggerRightClick={(e) => {
                  e.preventDefault();
                  moveTaskToPreviousStage(stage, index);
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssemblyLineTasks;
