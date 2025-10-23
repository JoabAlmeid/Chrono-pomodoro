import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number; //não vou usar Date.now. Depois pego isso e faço new Date()
  completeDate: number | null; //quando o timer chega ao final é number, senão nulo
  interruptDate: number | null; //quando a task for interrompida
  type: keyof TaskStateModel["config"];
};
