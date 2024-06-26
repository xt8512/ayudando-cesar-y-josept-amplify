import { create } from "zustand";
import type { InputProps } from "@fluentui/react-components";

// const initState = {
// username: "juanm.hidalgo@softtek.com",
// password: "L2m9CV35JT@1",
// username: "josehparedes255@gmail.com",
// password: "Laravel20$$12",
// username: "jhonatan.valenzuela.19@outlook.com",
// password: "R6Ut-+L;bd",
// username: "sixto.mujica@softtek.com"
// password: "2N@DuTs<"T"
// };

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
