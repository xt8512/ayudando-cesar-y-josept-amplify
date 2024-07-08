import { useState } from "react";
import { InputProps, Input } from "@fluentui/react-components";
import { EyeFilled, EyeOffFilled } from "@fluentui/react-icons";

export const PasswordField = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Input
      {...props}
      name="password"
      type={showPassword ? "text" : "password"}
      contentAfter={
        showPassword ? (
          <EyeOffFilled className="cursor-pointer" onClick={togglePasswordVisibility} />
        ) : (
          <EyeFilled className="cursor-pointer" onClick={togglePasswordVisibility} />
        )
      }
    />
  );
};
