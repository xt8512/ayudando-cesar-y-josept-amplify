import { Auth } from "@aws-amplify/auth";
import { generateIdToAmplify, getDeviceKey } from "./StartConfig";
import { encryptAmiAES } from "@/utils";

export type SignInAmplifyProps = {
  username: string;
  password: string;
  recaptcha: string;
};

// const deviceKey = "us-east-2_687481f7-6270-4d9d-a55a-2d134bc6bd9d"; // record
// const deviceKey = "us-east-2_6e6d8955-11d2-4a9a-b446-077be7443f03" // no record
// const deviceKey = "null" // default

export async function handleSignInAmplify(props: SignInAmplifyProps) {
  const { username, password, recaptcha } = props;

  const deviceKey = getDeviceKey(username);
  const idClient = generateIdToAmplify();

  const encryptedRecaptcha = encryptAmiAES(recaptcha);

  const clientMeta = {
    idClient,
    userAgent: window.navigator.userAgent,
    channelCode: "BRK",
    deviceKey,
    recaptcha: encryptedRecaptcha,
  };

  // SIGN IN
  try {
    await Auth.signIn(username, password, clientMeta);
  } catch (error) {
    console.error("Error signing in:", error);
  }
}
