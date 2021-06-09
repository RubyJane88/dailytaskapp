import { Task } from "../models/TaskModel";
import { api, Endpoints } from "../api/api";

export async function getTaskAxios() {
  return await api.get<Task[]>(Endpoints.tasks);
}

export async function deleteTaskAxios(id: number) {
  return await api.delete<void>(`${Endpoints.tasks}/${id}`);
}

export async function postTaskAxios(task: Task) {
  return await api.post<Task>(`${Endpoints.tasks}`, task);
}

export async function putTaskAxios(task: Task) {
  return await api.put<void>(`${Endpoints.tasks}/${task.id}`, task);
}
