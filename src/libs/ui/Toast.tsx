import { Toast, ToastTitle } from "@fluentui/react-components";

type ToastBaseProps = {
  title: string;
};

export const ToastBase = ({ title }: ToastBaseProps) => {
  return (
    <Toast>
      <ToastTitle>{title}</ToastTitle>
    </Toast>
  );
};
