// import { handleRecoveryPassword } from "@/amplify/apis/RecoveryPassword";
// import { authSignInPublic } from "@/amplify/actions/SignInPublic";
import { Card, CompoundButton } from "@fluentui/react-components";

export const TestApi = () => {
  const handleQr = async () => {
    // authSignInPublic();

    
  }

  return (
    <Card>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {/* <CompoundButton onClick={()=> handleRecoveryPassword()} secondaryContent="status">
          RECUPERAR CONTRASEÑA
        </CompoundButton> */}

        <CompoundButton onClick={handleQr}>
          QR
        </CompoundButton>
      </div>
    </Card>
  );
};
