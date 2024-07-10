import type { ToastIntent } from "@fluentui/react-components";

export type LoginCatchRules = {
  find: string;
  message: string;
  type: ToastIntent;
};

export const rules: LoginCatchRules[] = [
  {
    find: "Incorrect username or password",
    message: "Credenciales incorrectas",
    type: "error",
  },
  {
    find: "redirectToOtp",
    message: "Vamos a OTP",
    type: "success",
  },
  {
    find: "Maximum number of attempts exceeded",
    message: "Tu usuario ha sido bloqueado por 1 hora",
    type: "error"
  }
];
