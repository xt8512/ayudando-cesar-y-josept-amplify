import { Auth } from "@aws-amplify/auth";
import { v4 as uuid } from "uuid";
import { previewConfig } from "../config";

export async function handleSignInAmplify(username: string, password: string) {
  const idclient = uuid();
  console.log(idclient);

  const currentConfigAWS = Auth.configure(previewConfig);
  console.log("CURRENT_CONFIG: ", currentConfigAWS);

  try {
    await Auth.signIn(username, password, {
      idClient: idclient,
      userAgent: window.navigator.userAgent,
      channelCode: "BRK",
      deviceKey: "[deviceKey]",
      recaptcha: "TOKEN",
    });
  } catch (error) {
    console.error("Error signing in:", error);
  }
  // validar login usuario

  // si response es correcto, entonces go HOME

  // VALIDACION SI ESTA RECORDADO EL DEVICEKEY
  // obtener deviceKey
  // const deviceKey = await Auth.getDeviceKey(); // SI NO HAY -- ENVIA ERROR
  // validar devicekey recordado
  // const fetchDeviceKey = await Auth.fetchDeviceKey();

  // LOGOUT
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("Error signing out: ", error);
  }

  const password2 = "";

  try {
    const user = await Auth.signIn(username, password2);    

    const challengeAnswerResponse = await Auth.sendCustomChallengeAnswer(
      user,
      "INIT",
      {
        idClient: idclient,
        userAgent: window.navigator.userAgent,
        channelCode: "BRK",
        deviceKey: 'US_EAST_"2:73e5c9d5-9cf9-46cb-bc51-e9d51af1ca7d',
        recaptcha: "TOKEN",
        password: "[ENCRYPTED_PASSWORD]",
      }
    );

    console.log("USER: ", user);
    console.log("INIT: ", challengeAnswerResponse);

    const currentSession = await Auth.currentSession();
    console.log("CURRENT_SESSION: ", currentSession);
  } catch (error) {
    console.error("Error signing in:", error);
  }
}
