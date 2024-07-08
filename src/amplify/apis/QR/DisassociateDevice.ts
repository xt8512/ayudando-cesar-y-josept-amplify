import { handleSignInPublic } from "../../actions/SignInPublic";
import {
  generateIdToAmplify,
  handleStartConfigPublic,
} from "../../actions/StartConfig";
import { httpCient } from "../../server-client";
import type { ResponseAmplify } from "../../types/Amplify.Response";

type ResponseSecurityQRDisassociate = {
  affectedRows: number;
  clientId: string;
  status: string;
  username: string;
};

export const handleDisassociateDevices = async (username: string, listDevices: number[]) => {
  await handleStartConfigPublic();
  await handleSignInPublic();

  // Esto probablemente sea de tu zustand
  const clientId = generateIdToAmplify();

  try {
    const response = await httpCient.post<
      ResponseAmplify<ResponseSecurityQRDisassociate>
    >("SEGURIDAD", "/security/qr/disassociate", {
      identifier: username,
      clientId,
      listDevices
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
