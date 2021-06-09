import { createAsyncThunk } from "@reduxjs/toolkit";
import { TaskActionTypes } from "./taskType";
import {
  deleteTaskAxios,
  getTaskAxios,
  postTaskAxios,
} from "../../../services/taskService";
import { Task } from "models/TaskModel";

export const getTasksAction = createAsyncThunk(
  TaskActionTypes.FETCH_TASKS,
  async () => {
    const { data } = await getTaskAxios();
    return data;
  }
);

export const postTaskAction = createAsyncThunk(
  TaskActionTypes.ADD_TASK,
  async (task: Task) => {
    const { data } = await postTaskAxios(task);

    return data;
  }
);

export const deleteTaskAction = createAsyncThunk(
  TaskActionTypes.REMOVE_TASK_BY_ID,
  async (id: number) => {
    return await deleteTaskAxios(id);
  }
);
