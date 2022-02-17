import { StageAndTaskList, Task } from "./commonInterfaces";

export const mapStageToTaskList = (stages:Array<string>) => {
    const stageTaskListDict:StageAndTaskList = {};
    stages.map((stage:string)=>{
        stageTaskListDict[stage]=[];
    });
    return stageTaskListDict;
}


export const addNewTaskToList=(stageTaskListDict:StageAndTaskList,newTask:Task) => {
    const updatedStageTaskList = {...stageTaskListDict};
    // assuming stageTaskListDict will have minimum one stage 
    // assuming the new task would be added to the end of the first list
    let firstStage = Object.keys(updatedStageTaskList)[0];
    updatedStageTaskList[firstStage].push(newTask);
    return updatedStageTaskList;
}