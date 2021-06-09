import { Task } from "../../../models/TaskModel";

export type TaskStateType = {
  readonly tasks: Task[];
  readonly task: Task;
  readonly loading: boolean;
  readonly tempData?: any[];
};

export const taskNamespace = "task";

//action types
export const TaskActionTypes = {
  FETCH_TASKS: `${taskNamespace}/FETCH_TASKS`,
  FETCH_BY_ID: `${taskNamespace}/FETCH_TASK_BY_ID`,
  REMOVE_TASK_BY_ID: `{taskNamespace}/REMOVE_TASK_BY_ID`,
  ADD_TASK: `${taskNamespace}/ADD_TASK`,
  UPDATE_TASK: `${taskNamespace}/UPDATE_TASK`,
};
