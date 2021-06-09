import { combineReducers } from "redux";
import taskReducer from "../app/features/task/taskSlice";

const injectedReducers = {
  task: taskReducer,
};

const rootReducer = combineReducers({
  ...injectedReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createReducer = () => rootReducer;
