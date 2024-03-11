import { createContext } from "react";

export const enum UseDarkModeState {
  Limbo = 0,
  White,
  Dark,
}

const DarkModeContext = createContext<{
  useDarkMode: UseDarkModeState;
  setUseDarkMode: (useDarkMode: UseDarkModeState) => void;
}>({
  useDarkMode: UseDarkModeState.Limbo,
  setUseDarkMode: () => {},
});

export default DarkModeContext;
