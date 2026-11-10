import { create } from "zustand";
type CounterStore = {
  count: number;
  up: () => void;
  down: () => void;
};
export const useCounterStore = create<CounterStore>((set) => ({
  count: 7,
  // function version of set so it always reads the latest count
  up: () => set((state) => ({ count: state.count + 1 })),
  down: () => set((state) => ({ count: state.count - 1 })),
}));
