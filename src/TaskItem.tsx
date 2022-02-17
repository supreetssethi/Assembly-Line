import React, { MouseEventHandler } from "react";
import { Task } from "./commonInterfaces";
import "./TaskItem.css";

interface TaskItemInterface {
    task:Task;
    triggerLeftClick:MouseEventHandler<HTMLDivElement>;
    triggerRightClick:MouseEventHandler<HTMLDivElement>;
}
const TaskItem = (props: TaskItemInterface) => {
    const {task,triggerLeftClick,triggerRightClick} = props;
  return (
    <div
      className="task-item"
      onClick={triggerLeftClick}
      onContextMenu={triggerRightClick}
    >
      {task}
    </div>
  );
}

export default TaskItem;
