import { handleSendCustomChallengeAnswer } from "@/amplify/actions/SendCustomChallengeAnswer";
import { handleVerifyOTP } from "@/amplify/actions/VerifyOTP";
import { useAuth, useOtp } from "@/stores/auth";
import { useCurrentUser } from "@/stores/auth/useCurrentUser";
import { Card, CompoundButton, Field, Input } from "@fluentui/react-components";

export const Otp = () => {
  const { username } = useAuth();
  const { code, onChange } = useOtp();
  const { user, setUser } = useCurrentUser();

  const handleSendEmail = async () => {
    const new_user = await handleSendCustomChallengeAnswer(username);
    setUser(new_user);
  };

  return (
    <Card>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <CompoundButton secondaryContent="resend" onClick={handleSendEmail}>
          LOGIN TOTP
        </CompoundButton>

        <Field label="Codigo">
          <Input
            name="code"
            value={code}
            onChange={onChange}
            placeholder="Ejm: 123456"
          />
        </Field>

        <CompoundButton
          disabled={code.length < 6}
          secondaryContent="Check"
          onClick={() => handleVerifyOTP(user, code)}
        >
          VERIFY-TOTP
        </CompoundButton>
      </div>
    </Card>
  );
};
