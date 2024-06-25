import { handleSignInAmplify } from "@/amplify/actions/SignInAmplify";
import { ActionButton } from "@/libs";
import { useAuth } from "@/stores/auth/useAuth";
import { Card, Field, Input } from "@fluentui/react-components";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

// const initState = {
// username: "juanm.hidalgo@softtek.com",
// password: "L2m9CV35JT@1",
// username: "josehparedes255@gmail.com",
// password: "Laravel20$$12",
// username: "jhonatan.valenzuela.19@outlook.com",
// password: "R6Ut-+L;bd",
// };

export const Login = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
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
      console.log("Error in Login current:", error);
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
              <Input
                value={password}
                name="password"
                type="password"
                onChange={onChange}
              />
            </Field>
          </div>
        </div>
      </div>
    </Card>
  );
};
