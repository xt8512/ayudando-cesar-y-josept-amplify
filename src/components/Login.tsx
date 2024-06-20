import { handleSignInAmplify } from "@/amplify/actions/SignInAmplify";
import { useAuth } from "@/stores/auth/useAuth";
import {
  Card,
  CompoundButton,
  Field,
  Input,
} from "@fluentui/react-components";
import { useState } from "react";
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
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    setLoading(true);
    try {
      if (!executeRecaptcha) throw new Error("Execute recaptcha not yet available");

      const recaptcha: string = await executeRecaptcha("register");

      await handleSignInAmplify({
        username,
        password,
        recaptcha,
      });
    } catch (error) {
      console.log("Error in Login current:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="row-span-3">
      <div className="flex gap-3">
        <CompoundButton
          disabled={loading}
          onClick={onClick}
          secondaryContent="status"
        >
          {loading ? "Loading..." : "Login in"}
        </CompoundButton>

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
    </Card>
  );
};
