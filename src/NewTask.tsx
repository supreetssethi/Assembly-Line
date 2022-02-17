import React, { useState } from "react";
import { Task } from "./commonInterfaces";

interface NewTaskInterfaces {
  newTaskHandler: Function;
}
function NewTask(props: NewTaskInterfaces) {
  const { newTaskHandler } = props;
  const [taskValue, setTaskValue] = useState<Task>("");
  return (
    <div>
      Add an item:{" "}
      <input
        value={taskValue}
        onChange={(e) => {
            setTaskValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (taskValue.length) {
              newTaskHandler(taskValue);
              setTaskValue("");
            }
          }
        }}
        data-testid="new-task-input"
      />
    </div>
  );
}

export default NewTask;
