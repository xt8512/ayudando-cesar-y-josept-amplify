import { handleSendCustomChallengeAnswer } from "@/amplify/actions/SendCustomChallengeAnswer";
import { useAuth } from "@/stores/auth/useAuth";
import { Card, CompoundButton, Field, Input } from "@fluentui/react-components";

export const Otp = () => {
  const { username } = useAuth();

  return (
    <Card>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <CompoundButton
          secondaryContent="resend"
          onClick={() => handleSendCustomChallengeAnswer(username)}
        >
          LOGIN TOTP
        </CompoundButton>

        <Field label="Codigo">
          <Input />
        </Field>

        <CompoundButton secondaryContent="status">VERIFY-TOTP</CompoundButton>
      </div>
    </Card>
  );
};
