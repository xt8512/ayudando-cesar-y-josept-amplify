import { Card, CompoundButton, Field, Input } from "@fluentui/react-components";

export const Otp = () => {
  return (
    <Card>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <CompoundButton secondaryContent="resend">LOGIN TOTP</CompoundButton>

        <Field label="Codigo">
          <Input />
        </Field>

        <CompoundButton secondaryContent="status">VERIFY-TOTP</CompoundButton>
      </div>
    </Card>
  );
};
