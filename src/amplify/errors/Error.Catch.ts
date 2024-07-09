import { extractJsonFromString } from "@/utils";
import { AmplifyError } from "../types/Amplify.Error";

export const ErrorCatch = (error: Error) => {
  const { message } = error;

  const JsonProps = extractJsonFromString(message);

  if (JsonProps.hasJson) {
    return JsonProps.json as AmplifyError;
  }

  return message;
};
