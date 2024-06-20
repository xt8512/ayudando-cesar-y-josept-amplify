import { InputProps } from "@fluentui/react-components";
import { create } from "zustand";

type State = {
  code: string;
};

type Action = {
  onChange: InputProps["onChange"];
};

export const useOtp = create<State & Action>((set) => ({
  code: "",
  onChange: (ev) =>
    set(() => ({
      code: ev.target.value,
    })),
}));
