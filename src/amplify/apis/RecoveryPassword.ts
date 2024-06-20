import { Auth } from "@aws-amplify/auth";
import { httpCient } from "../server-client";

export const handleRecoveryPassword = async () => {
  try {
    const currentUser = await Auth.currentUserInfo();

    const email = currentUser.attributes.email;    

    const response = await httpCient.post(
      "PRUEBA",
      "/authentication/user/corredor/contrasena/recuperar",
      { email }
    );

    console.log(response);
  } catch (error) {
    console.error("Error recovery password:", error);
  }
};
