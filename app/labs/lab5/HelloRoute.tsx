"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
export default function HelloRoute() {
  const [hello, setHello] = useState<{ message?: string }>({});
  useEffect(() => {
    client.fetchHello().then(setHello);
  }, []);
  return (
    <div id="wd-lab5-next-hello">
      <h4>GET /api/lab5/hello (Next.js Route Handler)</h4>
      <pre>{JSON.stringify(hello, null, 2)}</pre>
      <hr />
    </div>
  );
}
