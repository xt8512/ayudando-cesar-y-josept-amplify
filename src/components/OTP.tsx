import { handleSendCustomChallengeAnswer } from "@/amplify/actions/SendCustomChallengeAnswer";
import { handleVerifyOTP } from "@/amplify/actions/VerifyOTP";
import { useAuth, useOtp } from "@/stores/auth";
import { useCurrentUser } from "@/stores/auth/useCurrentUser";
import {
  Card,
  CompoundButton,
  Field,
  Input,
  Spinner,
} from "@fluentui/react-components";
import { useState } from "react";

export const Otp = () => {
  const { username } = useAuth();
  const { code, onChange } = useOtp();
  const { user, setUser } = useCurrentUser();
  const [loading, setLoading] = useState(false);

  const handleSendEmail = async () => {
    setLoading(true);
    try {
      const new_user = await handleSendCustomChallengeAnswer(username);
      setUser(new_user);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <CompoundButton
          disabled={loading}
          secondaryContent={loading ? "" : "resend"}
          onClick={handleSendEmail}
        >
          {loading ? <Spinner label={"Enviando correo"} /> : "LOGIN TOTP"}
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
