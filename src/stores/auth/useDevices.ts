import { create } from "zustand";
// import type { InputProps } from "@fluentui/react-components";

type State = {
  listDevices: number[];
};

type Action = {
  setDevices: (list: number[]) => void;
};

export const useDevices = create<State & Action>((set) => ({
  listDevices: [],
  setDevices: (listDevices) => set({ listDevices }),
}));
