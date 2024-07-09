import { Auth } from "@aws-amplify/auth";
import { handleStartConfig } from "./StartConfig";
import { encryptAmiAES } from "@/utils";
import { generateIdToAmplify, getDeviceKey } from "../constants";
import { ErrorCatch } from "../errors/Error.Catch";

export type SignInAmplifyProps = {
  username: string;
  password: string;
  recaptcha: string;
};

// const deviceKey = "us-east-2_687481f7-6270-4d9d-a55a-2d134bc6bd9d"; // record
// const deviceKey = "us-east-2_6e6d8955-11d2-4a9a-b446-077be7443f03" // no record
// const deviceKey = "null" // default

export async function handleSignInAmplify(props: SignInAmplifyProps) {
  handleStartConfig();

  const { username, password, recaptcha } = props;

  const deviceKey = getDeviceKey();
  const idClient = generateIdToAmplify();

  const encryptedRecaptcha = encryptAmiAES(
    JSON.stringify({ token: recaptcha, clientId: idClient })
  );

  if (!idClient || !encryptedRecaptcha || !deviceKey) {
    throw new Error(
      "One or more values in clientMetaData are null or undefined"
    );
  }

  const clientMeta = {
    idClient,
    userAgent: window.navigator.userAgent,
    channelCode: "BRK",
    deviceKey,
    recaptcha: encryptedRecaptcha,
  };

  console.log("clientMeta", clientMeta);

  // SIGN IN
  try {
    await Auth.signIn(username, password, clientMeta);
  } catch (error) {
    throw ErrorCatch(error as Error);
  }
}
