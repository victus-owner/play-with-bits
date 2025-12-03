import { useState } from "react";
import { decimalToBinary } from "../utils/bitStuffing";

export default function DecimalInput({ onBinary }) {
  const [decimalInput, setDecimalInput] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    setError("");
    if (decimalInput.trim() === "") {
      setError("Please enter a decimal number.");
      return;
    }
    if (!/^\d+$/.test(decimalInput.trim())) {
      setError("Only non-negative integers are allowed.");
      return;
    }
    const n = Number(decimalInput.trim());
    if (!Number.isSafeInteger(n)) {
      setError("Number is too large.");
      return;
    }
    onBinary(decimalToBinary(n));
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-4">
      <label className="md:w-40 text-sm font-medium">Enter decimal:</label>
      <input
        className="flex-1 border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
        type="text"
        inputMode="numeric"
        placeholder="e.g. 255"
        value={decimalInput}
        onChange={(e) => setDecimalInput(e.target.value)}
      />
      <button
        className="mt-2 md:mt-0 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
        onClick={handleConvert}
      >
        Convert
      </button>
      {error && (
        <p className="text-red-600 text-sm mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
