import { create } from "zustand";
import type { InputProps } from "@fluentui/react-components";

type State = {
  username: string;
  password: string;
};

type Action = {
  onChange: InputProps["onChange"];
  setForm: (form: State) => void;
};

export const useAuth = create<State & Action>((set) => ({
  username: import.meta.env.VITE_USERNAME ?? "",
  password: import.meta.env.VITE_PASSWORD ?? "",
  onChange: (ev) =>
    set((state) => ({
      ...state,
      [ev.target.name]: ev.target.value,
    })),
  setForm: (form) => set(form),
}));
