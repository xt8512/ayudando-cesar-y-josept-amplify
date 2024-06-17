import { Auth } from "@aws-amplify/auth";
import { previewConfig } from "../config";

export async function handleStartConfig() {
  console.log('iniciando con previewConfig');
  return Auth.configure(previewConfig);
}
