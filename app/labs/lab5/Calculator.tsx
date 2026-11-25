"use client";
import { useState } from "react";
const OPERATIONS = [
  { value: "add", symbol: "+" },
  { value: "subtract", symbol: "-" },
  { value: "multiply", symbol: "×" },
  { value: "divide", symbol: "÷" },
  { value: "power", symbol: "^" },
];
export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const calculate = async (newOperation: string) => {
    const response = await fetch(
      `/api/lab5/calculator?a=${a}&b=${b}&operation=${newOperation}`,
    );
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
      setResult("");
      return;
    }
    const symbol = OPERATIONS.find((o) => o.value === data.operation)?.symbol;
    setError("");
    setResult(`${data.a} ${symbol} ${data.b} = ${data.result}`);
  };
  return (
    <div id="wd-lab5-next-calculator" className="p-2">
      <h3>Calculator (Next.js Web API)</h3>
      <label htmlFor="a-input" className="mr-2">A:</label>
      <input
        type="number"
        placeholder="A"
        id="a-input"
        className="mb-2 rounded border border-neutral-300 px-2 py-1"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <br />
      <label htmlFor="b-input" className="mr-2">B:</label>
      <input
        type="number"
        placeholder="B"
        id="b-input"
        className="mb-2 rounded border border-neutral-300 px-2 py-1"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <br />
      <label htmlFor="operation-select" className="mr-2">Operation:</label>
      {/* left ^ out of the route on purpose */}
      <select
        id="operation-select"
        className="mb-2 rounded border border-neutral-300 px-2 py-1"
        value={operation}
        onChange={(e) => {
          setOperation(e.target.value);
          calculate(e.target.value);
        }}
      >
        {OPERATIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.symbol}
          </option>
        ))}
      </select>
      <br />
      <button
        type="button"
        onClick={() => calculate(operation)}
        disabled={!a || !b}
        className="mt-2 rounded bg-blue-600 px-4 py-1.5 text-white disabled:opacity-50"
      >
        Calculate
      </button>
      <br />
      {result && <p className="mt-2">Result: {result}</p>}
      {error && <p className="mt-2 text-red-700">{error}</p>}
      <hr />
    </div>
  );
}
