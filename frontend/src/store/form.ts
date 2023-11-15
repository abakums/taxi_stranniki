import { create } from "zustand";
import type { Form } from "@/types";

interface State {
  state: Form;
}

interface Action {
  updateState(value: { [key: string]: string } | Form): void;
}

export const useFormStore = create<State & Action>((set) => ({
  state: {} as Form,

  updateState(value) {
    set((draft) => {
      localStorage.setItem(
        "state",
        JSON.stringify({ ...draft.state, ...value })
      );

      return { ...draft, state: { ...draft.state, ...value } };
    });
  },
}));
