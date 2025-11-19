import { toast } from "react-toastify";
import { Dialog } from "../components/Dialog";

//pode chamar também de "showMessage". É um adapter para caso a lib mudar, a função continua a mesma. Padrão de Projeto
export const toastifyWraper = {
  success: (msg: string) => toast.success(msg),
  warning: (msg: string) => toast.warning(msg),
  info: (msg: string) => toast.info(msg),
  dismiss: () => toast.dismiss(),
  confirm: (data: string, onClosing: (confirmation: boolean) => void) =>
    toast(Dialog, {
      data,
      onClose: (confirmation) => {
        if (confirmation) return onClosing(true);

        return onClosing(false);
      },
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
    }),
};
