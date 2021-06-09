import { Task } from "../models/TaskModel";
import { api, Endpoints } from "../api/api";

export async function getTaskAxios() {
  return await api.get<Task[]>(Endpoints.tasks);
}

export async function deleteTaskAxios<T>(id) {
  return await api.delete<T>(`${Endpoints.tasks}/${id}`);
}

export async function postTaskAxios(task: Task) {
  return await api.post(`${Endpoints.tasks}`, task);
}
