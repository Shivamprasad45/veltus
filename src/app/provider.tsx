"use client"; // Mark as client component
import { Provider } from "react-redux";
import { store } from "./config/configstore";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
