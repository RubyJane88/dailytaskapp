import { taskNamespace, TaskStateType } from "./taskType";
import { Task } from "../../../models/TaskModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  deleteTaskAction,
  getTasksAction,
  postTaskAction,
} from "./taskAsyncActions";
import { stat } from "fs";

//task state
export const initialState: TaskStateType = {
  tasks: [] as Task[],
  task: {} as Task,
  loading: false,
};

export const taskSlice = createSlice({
  name: taskNamespace,

  initialState,
  //mutate using non-async actions

  reducers: {
    softDeleteTaskAction: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
    updateTasksAction: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    markCompletedAction: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.map((v) => {
        if (v.id === action.payload.id) v.isComplete = true;

        return v;
      });
    },
  },

  //mutate using async actions
  extraReducers: (builder) => {
    builder.addCase(getTasksAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(
      getTasksAction.fulfilled,
      (state, action: PayloadAction<Task[]>) => {
        state.tasks = action.payload;
        state.loading = false;
      }
    );

    builder.addCase(getTasksAction.rejected, (state, action) => {
      state.loading = false;
    });

    //post or add

    builder.addCase(postTaskAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(postTaskAction.fulfilled, (state, action) => {
      state.tasks.push(action?.payload);
      state.loading = false;
    });

    builder.addCase(postTaskAction.rejected, (state, action: any) => {
      console.log(action?.error);
      state.loading = false;
    });

    //delete DB - optimisitc update

    builder.addCase(deleteTaskAction.pending, (state, action) => {
      state.tempData = [...state.tasks];
      const index = state.tasks.findIndex((t) => t.id === action.meta.arg);
      state.tasks.splice(index, 1);
    });

    builder.addCase(deleteTaskAction.rejected, (state, action: any) => {
      console.log(action?.error);
      state.tasks = state.tempData as Task[];
    });
  },
});

/*non-async actions (reducers) */
export const { softDeleteTaskAction, updateTasksAction, markCompletedAction } =
  taskSlice.actions;

export default taskSlice.reducer;
