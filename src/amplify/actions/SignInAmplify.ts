import { Auth } from "@aws-amplify/auth";
import { generateIdToAmplify } from "./StartConfig";

export async function handleSignInAmplify(username: string, password: string) {
  const deviceKey = "us-east-2_687481f7-6270-4d9d-a55a-2d134bc6bd9d"; // record
  // const deviceKey = "us-east-2_6e6d8955-11d2-4a9a-b446-077be7443f03" // no record
  // const deviceKey = "null" // default

  const idClient = generateIdToAmplify();

  try {
    const user = await Auth.signIn(username, password, {
      idClient,
      userAgent: window.navigator.userAgent,
      channelCode: "BRK",
      deviceKey,
      recaptcha: "TOKEN",
    });

    // } catch (error) {
    //   console.error("Error signing in:", error);
    // }

    // validar login usuario

    // si response es correcto, entonces go HOME

    // VALIDACION SI ESTA RECORDADO EL DEVICEKEY
    // obtener deviceKey
    // const deviceKey = await Auth.getDeviceKey(); // SI NO HAY -- ENVIA ERROR
    // validar devicekey recordado
    // const fetchDeviceKey = await Auth.fetchDeviceKey();

    // LOGOUT
    // try {
    //   await Auth.signOut();
    // } catch (error) {
    //   console.log("Error signing out: ", error);
    // }

    // try {
    // const user = await Auth.signIn(username, password);

    // console.log("USER: ", user);

    // return

    // const { sessionToken } = await Auth.currentCredentials();

    const challengeAnswerResponse = await Auth.sendCustomChallengeAnswer(
      {
        ...user,
        email: user.getUsername(),
        token: user.getSignInUserSession()?.getIdToken().getJwtToken(),
      },
      "INIT",
      {
        idClient,
        userAgent: window.navigator.userAgent,
        channelCode: "BRK",
      }
    );

    console.log("INIT: ", challengeAnswerResponse);

    const currentSession = await Auth.currentSession();
    console.log("CURRENT_SESSION: ", currentSession);
  } catch (error) {
    console.error("Error signing in:", error);
  }
}
