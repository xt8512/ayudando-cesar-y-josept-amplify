import type { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

type GoogleRecaptchaV3Props = {
  children: ReactNode;
};

const GoogleRecaptchaV3 = ({ children }: GoogleRecaptchaV3Props) => {
  return (
    <GoogleReCaptchaProvider
      key={"signIn"}
      reCaptchaKey={import.meta.env.VITE_GOOGLE_RECAPTCHA_API_KEY_V3}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default GoogleRecaptchaV3;
