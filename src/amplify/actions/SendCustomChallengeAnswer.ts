import { Auth } from "@aws-amplify/auth";
import { generateIdToAmplify } from "./StartConfig";

export const handleSendCustomChallengeAnswer = async (username: string) => {
  const idClient = generateIdToAmplify();

  try {
    const user = await Auth.signIn(username, "");

    const challengeAnswerResponse = await Auth.sendCustomChallengeAnswer(
      user,
      "INIT",
      {
        idClient,
        userAgent: window.navigator.userAgent,
        channelCode: "BRK",
      }
    );

    console.log(challengeAnswerResponse);

    return challengeAnswerResponse; 
  } catch (e) {
    console.error("Error in handleSendCustomChallengeAnswer: ", e);
  }
};
