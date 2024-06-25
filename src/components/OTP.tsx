import { handleSendCustomChallengeAnswer } from "@/amplify/actions/SendCustomChallengeAnswer";
// import { handleSignOut } from "@/amplify/actions/SignOut";
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

  const handleVerifyOTPOnlyBackend = async () => {
    try {
      // SOLO COPIA ESTO SIXTO
      await handleVerifyOTP(user, code);
      // ESTO SOLO ES PORQUE SI NO BACKEND SE ROMPE SU LAMBDA TRIGGER
      // await handleSignOut()
    } catch (error) {
      //
    } finally {
      //
    }
  }

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
          onClick={handleVerifyOTPOnlyBackend}
        >
          VERIFY-TOTP
        </CompoundButton>
      </div>
    </Card>
  );
};
