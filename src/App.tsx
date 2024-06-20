import { Login, Otp, SignOut, TestApi } from "@/components";
import GoogleRecaptchaV3 from "./providers/GoogleRecaptchaV3";

function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-3">
        <GoogleRecaptchaV3>
          <Login />
        </GoogleRecaptchaV3>

        <Otp />
        <SignOut />
        <TestApi />
      </div>
    </div>
  );
}

export default App;
