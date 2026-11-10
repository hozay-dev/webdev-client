import { useCounterStore } from "./counterStore";
export default function ZustandCounter() {
  // picking one field at a time so this only re-renders when that field changes
  const count = useCounterStore((state) => state.count);
  const up = useCounterStore((state) => state.up);
  const down = useCounterStore((state) => state.down);
  return (
    <div id="wd-zustand-counter">
      <h3>Zustand Counter: {count}</h3>
      <button
        type="button"
        onClick={up}
        id="wd-zustand-up-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Up
      </button>
      <button
        type="button"
        onClick={down}
        id="wd-zustand-down-click"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Down
      </button>
    </div>
  );
}
