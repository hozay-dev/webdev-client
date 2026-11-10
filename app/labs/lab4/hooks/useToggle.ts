import { useState } from "react";
export default function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = () => setOn(!on);
  // as const so ts knows its a [boolean, function] pair and not just an array
  return [on, toggle] as const;
}
