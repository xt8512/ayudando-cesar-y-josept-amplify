import { handleSignInPublic } from "../../actions/SignInPublic";
import {
  generateIdToAmplify,
  handleStartConfigPublic,
} from "../../actions/StartConfig";
import { httpCient } from "../../server-client";
import type { ResponseAmplify } from "../../types/Amplify.Response";

type ResponseSecurityQRAsociative = {
  base64Image: string;
  clientId: string;
  image: string;
};

export const handleAsociativeQR = async (username:string, codeOTP:string) => {
  await handleStartConfigPublic();
  await handleSignInPublic();

  // Esto probablemente sea de tu zustand
  const clientId = generateIdToAmplify();

  try {
    const response = await httpCient.post<ResponseAmplify<ResponseSecurityQRAsociative>>(
      "SEGURIDAD",
      "/security/qr/associate",
      {
        identifier: username,
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
