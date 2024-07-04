import { OtpQR, QRApi, SignOut } from "@/components";

export const QRPage = () => {
  return (
    <>
      <QRApi />
      <OtpQR />
      <SignOut />
    </>
  );
};

export default QRPage;
