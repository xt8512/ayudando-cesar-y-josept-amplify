import { handleSignInAmplify } from "@/amplify/actions/SignInAmplify";
import {
  Card,
  CompoundButton,
  Field,
  Input,
  InputProps,
} from "@fluentui/react-components";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const initState = {
  // username: "juanm.hidalgo@softtek.com",
  // password: "L2m9CV35JT@1",
  username: "josehparedes255@gmail.com",
  password: "Laravel20$$12",
  // username: "jhonatan.valenzuela.19@outlook.com",
  // password: "R6Ut-+L;bd",
};

export const Login = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [form, setForm] = useState(initState);
  const [loading, setLoading] = useState(false);

  const onChange: InputProps["onChange"] = (ev) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value,
    });
  };

  const onClick = async () => {
    setLoading(true);
    try {
      if (!executeRecaptcha) throw new Error('Execute recaptcha not yet available');

      const token: string = await executeRecaptcha('register');

      await handleSignInAmplify({
        username: form.username, 
        password: form.password,
        recaptcha: token,
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
        <CompoundButton disabled={loading} onClick={onClick} secondaryContent="status">
          {loading ? "Loading..." : "Login in"}
        </CompoundButton>

        <div className="flex flex-col w-full">
          <Field label="Usuario">
            <Input value={form.username} name="username" onChange={onChange} />
          </Field>
          <Field label="Contraseña">
            <Input
              value={form.password}
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
