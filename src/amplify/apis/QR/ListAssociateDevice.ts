import { handleSignInPublic } from "../../actions/SignInPublic";
import {
  generateIdToAmplify,
  handleStartConfigPublic,
} from "../../actions/StartConfig";
import { httpCient } from "../../server-client";
import type { ResponseAmplify } from "../../types/Amplify.Response";

type Device = {
   id: number;
}

type ResponseSecurityQRList = {
  clientId: string;
  data: Device[];
  status: string;
  username: string;
};

export const handleListDevices = async (username:string) => {
  await handleStartConfigPublic();
  await handleSignInPublic();

  // Esto probablemente sea de tu zustand
  const clientId = generateIdToAmplify();

  try {
    const response = await httpCient.post<
      ResponseAmplify<ResponseSecurityQRList>
    >("SEGURIDAD", "/security/qr/list", {
      identifier: username,
      clientId,
      // username
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
