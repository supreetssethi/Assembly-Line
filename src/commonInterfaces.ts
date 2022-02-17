export type Task = string;

export interface StageAndTaskList {
  [name: string]: Array<Task>;
}
