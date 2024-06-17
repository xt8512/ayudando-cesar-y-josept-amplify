import { Auth, type CognitoUser } from "@aws-amplify/auth";

export async function handleVerifyOTP(user: CognitoUser) {
  if (user?.challengeName === "CUSTOM_CHALLENGE") {
    try {
      const code = document.getElementById("code") as HTMLInputElement;
      const challengeResponse = code ? code.value : "";

      const challengeAnswerResponse = await Auth.sendCustomChallengeAnswer(
        user,
        challengeResponse
      );
      console.log("CUSTOM AUTH: ", challengeAnswerResponse);

      const currentSession = await Auth.currentSession();
      console.log("CURRENT_SESSION: ", currentSession);

      const resultRememberDevice = await Auth.rememberDevice();
      console.log("rememberDevice:", resultRememberDevice);
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  }
}
