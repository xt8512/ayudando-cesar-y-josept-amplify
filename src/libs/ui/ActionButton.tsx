import {
  CompoundButton,
  CompoundButtonProps,
  Spinner,
} from "@fluentui/react-components";
import { useState } from "react";

export type IActionButtonProps = {
  text: string;
  loadingText: string;
  onClick: () => Promise<void>;
} & CompoundButtonProps;

export const ActionButton = ({
  loadingText = "Loading",
  text,
  onClick,
  ...props
}: IActionButtonProps) => {
  const [loading, setLoading] = useState(false);

  const nextStep = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> &
      React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (typeof onClick !== "function") return;

    setLoading(true);
    try {
      await onClick(event);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <CompoundButton
      {...props}
      disabled={loading || props.disabled}
      secondaryContent={loading ? "" : props.secondaryContent}
      onClick={nextStep}
    >
      {loading ? <Spinner label={loadingText} /> : text}
    </CompoundButton>
  );
};
