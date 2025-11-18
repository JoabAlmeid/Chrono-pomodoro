import type { TaskModel } from "../models/TaskModel";

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if (task.completeDate) return "Completa";
  if (task.interruptDate) return "Interrompida";
  //ele verifica se a id da task atual é a mesma da atual salva no localStorage
  if (task.id === activeTask?.id) return "Em Progresso";
  return "Abandonada";
}
