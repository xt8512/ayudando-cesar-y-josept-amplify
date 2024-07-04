import { Auth } from "@aws-amplify/auth";
import { handleSignInPublic } from "../../actions/SignInPublic";
import {
  generateIdToAmplify,
  handleStartConfigPublic,
} from "../../actions/StartConfig";
import { httpCient } from "../../server-client";
import type { AmplifyUser } from "../../types/Amplify.Cognito";
import type { ResponseAmplify } from "../../types/Amplify.Response";

type ResponseSecurityQRAsociative = {
  base64Image: string;
  clientId: string;
  image: string;
};

export const handleAsociativeQR = async (codeOTP:string) => {
  await handleStartConfigPublic();
  await handleSignInPublic();

  // Esto probablemente sea de tu zustand
  const clientId = generateIdToAmplify();
  const user: AmplifyUser = await Auth.currentAuthenticatedUser();

  try {
    const response = await httpCient.post<ResponseAmplify<ResponseSecurityQRAsociative>>(
      "SEGURIDAD",
      "/security/qr/associate",
      {
        identifier: user.attributes.sub,
        otp: codeOTP,
        clientId,
      }
    );

    console.log(response);    

    if (response.payload.clientId !== clientId)
      throw new Error("Identificador de cliente no coincide");

    return response;
  } catch (error) {
    console.error(error);

    return null;
  }
};
