import { useState } from "react";

export default function Results({ binary, k, stuffedBinary, stuffedDecimal }) {
  const [copied, setCopied] = useState(false);
  if (!binary) return null;

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg mt-4 h-full flex flex-col">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600">Original Binary</p>
          <pre className="font-mono text-sm bg-white rounded p-2 mt-2 overflow-auto">
            {binary}
          </pre>
        </div>
        <div className="ml-4 shrink-0">
          <button
            onClick={() => handleCopy(binary)}
            className="bg-white border rounded px-3 py-1 text-sm hover:bg-gray-50"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      {stuffedBinary ? (
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium">Stuffed</h3>
            <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">
              k = {k}
            </span>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
              dec = {stuffedDecimal}
            </span>
          </div>
          <pre className="font-mono text-sm bg-white rounded p-2 mt-2 overflow-auto">
            {stuffedBinary}
          </pre>
        </div>
      ) : (
        <p className="text-gray-500 italic mt-4">
          Enter k to perform bit stuffing.
        </p>
      )}
    </div>
  );
}
