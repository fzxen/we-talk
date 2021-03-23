import { useStore } from "canglin";
import { initialState, InitialState } from "./state";
export type { InitialState } from "./state";

export function useAppStore() {
  const [state, setState] = useStore<InitialState>("app", initialState);

  function checkMessage(checkedMessage: InitialState["opt"]["checkedMessage"]) {
    setState((state) =>
      Object.assign({}, state, {
        opt: { checkedMessage },
      })
    );
  }

  return {
    state,
    checkMessage,
  };
}
