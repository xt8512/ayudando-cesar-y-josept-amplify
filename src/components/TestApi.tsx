import { handleGetQR } from "@/amplify/apis/GetQR";
import { ActionButton } from "@/libs";
import { Card } from "@fluentui/react-components";

export const TestApi = () => {
  return (
    <Card>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <ActionButton
          onClick={handleGetQR}
          text="QR"
          loadingText="Procesando"
        />
      </div>
    </Card>
  );
};
