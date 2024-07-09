import { create } from "zustand";

type State = {
  id: string;
};

type Action = {
  setId: (id: string) => void;
};

export const useToastStore = create<State & Action>((set) => ({
  id: "",
  setId: (id: string) => set(() => ({ id })),
}));
