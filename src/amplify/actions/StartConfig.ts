import { awsConfig, awsConfigPublic, awsConfigPublicBrokers } from "../config";
import { Amplify } from "@aws-amplify/core";

export async function handleStartConfig() {
  console.log("iniciando cognito privado");
  return Amplify.configure(awsConfig);
}

export async function handleStartConfigPublic() {
  console.log("iniciando cognito publico");
  return Amplify.configure(awsConfigPublic);
}

export async function handleStartConfigPublicBrokers() {
  console.log("iniciando cognito publico brokers");
  return Amplify.configure(awsConfigPublicBrokers);
}
