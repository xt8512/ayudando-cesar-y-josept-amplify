import { handleGetQR } from "@/amplify/apis/GetQR";
import { handleRecoveryPassword } from "@/amplify/apis/RecoveryPassword";
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

        <ActionButton
          onClick={handleRecoveryPassword}
          text="BROKERS"
          loadingText="Procesando"
        />
      </div>
    </Card>
  );
};
