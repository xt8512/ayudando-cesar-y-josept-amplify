import { handleGetQR } from "@/amplify/apis/GetQR";
import { ActionButton } from "@/libs";
import { Card, Image } from "@fluentui/react-components";
import { useState } from "react";

export const QRApi = () => {
  const [image, setImage] = useState("");

  async function onClickGetQR() {
    const response = await handleGetQR();

    if (!response) return;

    setImage(response.payload.base64Image);
  }

  return (
    <Card>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <ActionButton
          onClick={onClickGetQR}
          text="QR"
          loadingText="Procesando"
        />

        {image && (
          <Image alt="Allan's avatar" src={image} height={200} width={200} />
        )}
      </div>
    </Card>
  );
};
