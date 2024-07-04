import { handleSendCustomChallengeAnswer } from "@/amplify/actions/SendCustomChallengeAnswer";
// import { handleSignOut } from "@/amplify/actions/SignOut";
import { handleVerifyOTP } from "@/amplify/actions/VerifyOTP";
import { ActionButton } from "@/libs";
import { useAuth, useOtp } from "@/stores/auth";
import { useCurrentUser } from "@/stores/auth/useCurrentUser";
import { Card, Field, Input } from "@fluentui/react-components";

export const OtpEmail = () => {
  const { username } = useAuth();
  const { code, onChange } = useOtp();
  const { user, setUser } = useCurrentUser();

  const handleSendEmail = async () => {
    const new_user = await handleSendCustomChallengeAnswer(username);

    if (!new_user) throw new Error("User not found");

    setUser(new_user);
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
  };

  return (
    <Card>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <ActionButton
          text="LOGIN TOTP"
          secondaryContent={"resend"}
          loadingText="Enviando correo"
          onClick={handleSendEmail}
        />

        <Field label="Codigo">
          <Input
            name="code"
            value={code}
            onChange={onChange}
            placeholder="Ejm: 123456"
          />
        </Field>

        <ActionButton
          disabled={code.length < 6}
          text="VERIFY-TOTP"
          secondaryContent="Check"
          loadingText="Verificando"
          onClick={handleVerifyOTPOnlyBackend}
        />
      </div>
    </Card>
  );
};
