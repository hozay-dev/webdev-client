export default function PassingFunctions({
  message,
  theFunction,
  theOtherFunction,
  sayMyName,
}: {
  message: string;
  theFunction: (message: string) => void;
  theOtherFunction: () => void;
  sayMyName: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Other Function
      </button>
      <button
        type="button"
        onClick={sayMyName}
        id="wd-pass-functions-name-click"
        className="ms-2 rounded bg-neutral-700 px-3 py-1.5 text-sm font-medium text-white"
      >
        Say My Name
      </button>
      <hr />
    </div>
  );
}
