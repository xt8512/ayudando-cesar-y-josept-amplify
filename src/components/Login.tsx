import { handleSignInAmplify } from "@/amplify/actions/SignInAmplify";
import { LoginCatch } from "@/amplify/errors/notification";
import { AmplifyError } from "@/amplify/types/Amplify.Error";
import { ActionButton, PasswordField } from "@/libs";
import { useAuth } from "@/stores/auth/useAuth";
import { useDispatchToast } from "@/utils";
import { Card, Field, Input } from "@fluentui/react-components";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export const Login = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { notify } = useDispatchToast();
  const { username, password, onChange } = useAuth();

  const onClick = async () => {
    try {
      if (!executeRecaptcha)
        throw new Error("Execute recaptcha not yet available");

      const recaptcha: string = await executeRecaptcha("register");

      await handleSignInAmplify({
        username,
        password,
        recaptcha,
      });
    } catch (error) {
      const found = LoginCatch(error as AmplifyError | string)

      notify.custom(found.message, found.type)
    }
  };

  return (
    <Card className="row-span-3">
      <div className="grid grid-cols-3 gap-3">
        <ActionButton
          className="col-span-1"
          text="Login in"
          loadingText="Loading"
          secondaryContent="status"
          onClick={onClick}
        />

        <div className="col-span-2">
          <div className="flex flex-col w-full">
            <Field label="Usuario">
              <Input value={username} name="username" onChange={onChange} />
            </Field>

            <Field label="Contraseña">
              <PasswordField value={password} onChange={onChange} />
            </Field>
          </div>
        </div>
      </div>
    </Card>
  );
};
