import { Login, OtpEmail, SignOut } from "@/components";
import GoogleRecaptchaV3 from "@/providers/GoogleRecaptchaV3";

export const LoginPage = () => {
  return (
    <>
      <GoogleRecaptchaV3>
        <Login />
      </GoogleRecaptchaV3>

      <OtpEmail />
      <SignOut />
    </>
  );
};

export default LoginPage;
