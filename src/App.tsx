import { Login, Otp, SignOut, TestApi } from "@/components";

function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-3">
        <Login />
        <Otp />
        <SignOut />
        <TestApi />
      </div>
    </div>
  );
}

export default App;
