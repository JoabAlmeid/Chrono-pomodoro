import { toast } from "react-toastify";

//pode chamar também de "showMessage". É um adapter para caso a lib mudar, a função continua a mesma. Padrão de Projeto
export const toastifyWraper = {
  success: (msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),
  warn: (msg: string) => toast.warn(msg),
  warning: (msg: string) => toast.warning(msg),
  info: (msg: string) => toast.info(msg),
  dismiss: () => toast.dismiss(),
};
