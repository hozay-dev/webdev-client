import { createContext, useContext, useState, type ReactNode } from "react";
type CounterContextValue = {
  count: number;
  setCount: (count: number) => void;
};
const CounterContext = createContext<CounterContextValue | null>(null);
export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(7);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}
export function useCounterContext() {
  const value = useContext(CounterContext);
  // blow up right away if i forget the provider instead of getting a silent null
  if (!value) {
    throw new Error("useCounterContext must be used inside CounterProvider");
  }
  return value;
}
