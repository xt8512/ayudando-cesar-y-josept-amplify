import { handleRecoveryPassword } from "@/amplify/apis/RecoveryPassword";
import { ActionButton } from "@/libs";
import { Card } from "@fluentui/react-components";

export const BrokersApi = () => {
  return (
    <Card>
      <div className="grid grid-cols-1 gap-3">
        <ActionButton
          onClick={handleRecoveryPassword}
          text="BROKERS"
          loadingText="Procesando"
        />
      </div>
    </Card>
  );
};
