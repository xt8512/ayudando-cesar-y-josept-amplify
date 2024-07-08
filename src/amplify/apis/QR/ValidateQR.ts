import { generateIdToAmplify } from "@/amplify/constants";
import { handleSignInPublic } from "../../actions/SignInPublic";
import { handleStartConfigPublic } from "../../actions/StartConfig";
import { httpCient } from "../../server-client";
import type { ResponseAmplify } from "../../types/Amplify.Response";

type ResponseSecurityQRValidate = {
  base64Image: string;
  clientId: string;
  image: string;
};

export const handleValidateQR = async (username: string, codeOTP: string) => {
  await handleStartConfigPublic();
  await handleSignInPublic();

  // Esto probablemente sea de tu zustand
  const clientId = generateIdToAmplify();

  try {
    const response = await httpCient.post<
      ResponseAmplify<ResponseSecurityQRValidate>
    >("SEGURIDAD", "/security/qr/validate", {
      identifier: username,
      otp: codeOTP,
      clientId,
    });

    console.log(response);

    if (response.payload.clientId !== clientId)
      throw new Error("Identificador de cliente no coincide");

    return response;
  } catch (error) {
    console.error(error);

    return null;
  }
};
