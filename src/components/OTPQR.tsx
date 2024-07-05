import { handleAsociativeQR } from "@/amplify/apis/QR/AsociativeQR";
import { handleDisassociateDevices } from "@/amplify/apis/QR/DisassociateDevice";
import { handleListDevices } from "@/amplify/apis/QR/ListAssociateDevice";
import { handleValidateQR } from "@/amplify/apis/QR/ValidateQR";
import { ActionButton } from "@/libs";
import { useAuth, useDevices, useOtp } from "@/stores/auth";
import { Card, Field, Input } from "@fluentui/react-components";

export const OtpQR = () => {
  const { code, onChange } = useOtp();
  const { setDevices, listDevices } = useDevices()
  const username = useAuth(state=>state.username)

  const onClickAsociative = async () => {
    await handleAsociativeQR(username,code)
  };

  const onClickValidate = async () => {
    await handleValidateQR(username,code)
  };

  const onClickList = async () => {
    const response = await handleListDevices(username)

    if(!response) return

    setDevices(response.payload.data.map(device=>device.id))
  }

  const onClickDisassociate = async () => {
    await handleDisassociateDevices(username, listDevices)
  }

  return (
    <Card>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Field label="Codigo">
          <Input
            name="code"
            value={code}
            onChange={onChange}
            placeholder="Ejm: 123456"
          />
        </Field>

        <ActionButton
          disabled={code.length < 6}
          text="Validate"
          secondaryContent={"Check"}
          loadingText="Validando"
          onClick={onClickAsociative}
        />

        <ActionButton
          disabled={code.length < 6}
          text="Associate"
          secondaryContent="Check"
          loadingText="Asociando"
          onClick={onClickValidate}
        />

        <ActionButton
          text="Listar"
          secondaryContent="show"
          loadingText="Obteniendo"
          onClick={onClickList}
        />

        <ActionButton
          text="Disassociate"
          secondaryContent="clear"
          loadingText="Limpiando"
          onClick={onClickDisassociate}
        />
      </div>
    </Card>
  );
};
