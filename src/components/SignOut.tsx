import { handleGetCurrentSession } from "@/amplify/actions/GetCurrentSession";
import { handleGetCurrentUser } from "@/amplify/actions/GetCurrentUser";
import { handleSignOut } from "@/amplify/actions/SignOut";
import { Card, CompoundButton } from "@fluentui/react-components";

export const SignOut = () => {
  return (
    <Card>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <CompoundButton
          onClick={() => handleGetCurrentUser()}
          secondaryContent="status"
        >
          GET CURRENT USER
        </CompoundButton>

        <CompoundButton
          onClick={() => handleGetCurrentSession()}
          secondaryContent="status"
        >
          GET CURRENT SESSION
        </CompoundButton>

        <CompoundButton
          onClick={() => handleSignOut()}
          secondaryContent="status"
        >
          SIGN-OUT
        </CompoundButton>
      </div>
    </Card>
  );
};
