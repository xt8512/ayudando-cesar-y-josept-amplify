import { CognitoUser } from "@aws-amplify/auth";
import { create } from "zustand";

type State = {
  user: CognitoUser | null;
};

type Action = {
  setUser: (user: CognitoUser | null) => void;
};

export const useCurrentUser = create<State & Action>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
