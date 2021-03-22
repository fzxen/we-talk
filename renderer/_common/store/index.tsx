import React, { useContext, useReducer } from "react";
import { reducer, initialState, ACTIONS } from "./reducer";
export { ACTIONS, InitialState } from "./reducer";

const Context = React.createContext({});

export function useStore() {
  return useContext<{
    state: typeof initialState;
    dispatch: React.Dispatch<{
      type: ACTIONS;
      payload?: any;
    }>;
  }>(Context as any);
}

interface StoreProps {
  children: React.ReactNode;
}
export function Store({ children }: StoreProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
