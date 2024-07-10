import { AmplifyError } from "@/amplify/types/Amplify.Error";
import { type LoginCatchRules, rules } from "./rules";

export const LoginCatch = (error: AmplifyError | string): LoginCatchRules => {
  const TextToFind = typeof error === "string" ? error : error.details;

  const Found = rules.find((rule) => TextToFind.includes(rule.find));

  if (!Found) {
    return { message: "Regla no planeada", type: "warning", find: "" };
  }

  return Found;
};
