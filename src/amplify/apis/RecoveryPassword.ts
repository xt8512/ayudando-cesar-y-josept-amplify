import { httpCient } from "../server-client";
import { handleStartConfigPublicBrokers } from "../actions/StartConfig";
import { handleSignInPublicBrokers } from "../actions/SignInPublicBrokers";

export const handleRecoveryPassword = async () => {
  await handleStartConfigPublicBrokers();
  await handleSignInPublicBrokers();

  try {
    const email = import.meta.env.VITE_USERNAME

    const response = await httpCient.post(
      "BROKERS",
      "/api-seguridad-brokers/authentication/user/corredor/contrasena/recuperar",
      { email }
    );

    console.log(response);
  } catch (error) {
    console.error("Error recovery password:", error);
  }
};
