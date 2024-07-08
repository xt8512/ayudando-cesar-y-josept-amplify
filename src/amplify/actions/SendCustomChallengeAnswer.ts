import { Auth } from "@aws-amplify/auth";
import { generateIdToAmplify } from "../constants";

export const handleSendCustomChallengeAnswer = async (username: string) => {
  const idClient = generateIdToAmplify();

  try {
    const user = await Auth.signIn(username, "", {
      idClient,
      userAgent: window.navigator.userAgent,
      channelCode: "BRK",
    });

    const challengeAnswerResponse = await Auth.sendCustomChallengeAnswer(
      user,
      "INIT",
      {
        idClient,
        userAgent: window.navigator.userAgent,
        channelCode: "BRK",
      }
    );

    console.log("CUSTOM AUTH: ", challengeAnswerResponse);    

    return user; 
  } catch (e) {
    console.error("Error in handleSendCustomChallengeAnswer: ", e);

    return null
  }
};
