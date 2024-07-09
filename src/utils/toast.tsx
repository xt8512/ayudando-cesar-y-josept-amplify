import { useToastStore } from "@/stores/utils";
import { ToastBase } from "@/libs";
import { useId, useToastController } from "@fluentui/react-components";
import { useEffect } from "react";

export const useDispatchToast = () => {
  const toasterId = useId("toaster");

  const { setId, id } = useToastStore();
  const { dispatchToast } = useToastController(id ?? toasterId);

  useEffect(() => {
    if (!id) {
      setId(toasterId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const notify = {
    error: (message: string) => {
      dispatchToast(<ToastBase title={message} />, { intent: "error" });
    },
    success: (message: string) => {
      dispatchToast(<ToastBase title={message} />, { intent: "success" });
    },
    info: (message: string) => {
      dispatchToast(<ToastBase title={message} />, { intent: "info" });
    },
    warning: (message: string) => {
      dispatchToast(<ToastBase title={message} />, { intent: "warning" });
    },
  };

  return {
    notify,
    toasterId: id ?? toasterId,
    dispatchToast,
  };
};
