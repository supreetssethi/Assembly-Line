import React, { useState } from "react";
import "./AssemblyLine.css";
import { Task } from "./commonInterfaces";
import NewTask from "./NewTask";

interface AssemblyLineInterface {
  stages: Array<string>;
}

function AssemblyLine(props: AssemblyLineInterface) {
  const { stages } = props;
  const [assemblyTasksList, setAssemblyTasksList] = useState<
    Array<Array<Task>>
  >([]);

  // handled emtpy stages step
  if (!stages.length) return <>There are no stages setup in assembly.</>;

  return (
    <div className="assembly-line">
      <NewTask newTaskHandler={(task: Task)=>{console.log(task)}}/>
      <div className="stages">
        {stages.map((stage, index) => (
          <div key={index} className="stage">
            <h2>{stage}</h2>
            <div className="task-list">
              {assemblyTasksList?.[index]?.map((taskItem, index) => (
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
