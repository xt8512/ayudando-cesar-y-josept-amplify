import { Auth, type CognitoUser } from "@aws-amplify/auth";
import { generateIdToAmplify, getDeviceKeyInCognito, setDeviceKey } from "../constants";

export async function handleVerifyOTP(
  user: CognitoUser | null,
  challengeResponse: string
) {
  if (!user) throw new Error("User is required");
  if (!challengeResponse) throw new Error("ChallengeResponse is required");

  if (user?.challengeName === "CUSTOM_CHALLENGE") {
    const idClient = generateIdToAmplify();

    try {
      const challengeAnswerResponse = await Auth.sendCustomChallengeAnswer(
        user,
        challengeResponse ?? "",
        {
          idClient,
          userAgent: window.navigator.userAgent,
          channelCode: "BRK",
        }
      );
      console.log("CUSTOM AUTH: ", challengeAnswerResponse);

      const deviceKey = getDeviceKeyInCognito(user.getUsername());
      setDeviceKey(deviceKey);

      const currentSession = await Auth.currentSession();
      console.log("CURRENT_SESSION: ", currentSession);

      const resultRememberDevice = await Auth.rememberDevice();
      console.log("rememberDevice:", resultRememberDevice);
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  }
}
