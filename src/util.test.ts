import { addNewTaskToList, mapStageToTaskList } from "./util";

test('all the stages and task list is created',()=>{
    const inputTotest =['Idea','Development'];
    const outputToTest = {
        Idea:[],
        Development:[]
    } 
    expect(mapStageToTaskList(inputTotest)).toMatchObject(outputToTest);
})



test('New task is added to the first stage',()=>{
    const inputTotest ={'Idea':[],'Development':[]};
    const outputToTest = {
        Idea:['new task'],
        Development:[]
    } 
    expect(addNewTaskToList(inputTotest,"new task")).toMatchObject(outputToTest);
})