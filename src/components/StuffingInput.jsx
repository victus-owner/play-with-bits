import { useState } from "react";
import { stuffBits, binaryToDecimal } from "../utils/bitStuffing";

export default function StuffingInput({ binary, onResult }) {
  const [kInput, setKInput] = useState("");
  const [error, setError] = useState("");

  const handleStuff = () => {
    setError("");
    if (!binary) {
      setError("Convert a decimal to binary first.");
      return;
    }
    if (kInput.trim() === "") {
      setError("Enter how many consecutive 1's before stuffing 0.");
      return;
    }
    if (!/^\d+$/.test(kInput.trim())) {
      setError("k must be a positive integer.");
      return;
    }
    const k = Number(kInput.trim());
    if (k <= 0) {
      setError("k must be greater than 0.");
      return;
    }
    const stuffed = stuffBits(binary, k);
    const dec = binaryToDecimal(stuffed);
    onResult({ k, stuffedBinary: stuffed, stuffedDecimal: dec });
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-4">
      <label className="md:w-40 text-sm font-medium">
        Enter no. to stuff 0 :
      </label>
      <input
        className="flex-1 border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
        type="text"
        inputMode="numeric"
        placeholder="e.g. 4"
        value={kInput}
        onChange={(e) => setKInput(e.target.value)}
      />
      <button
        className="mt-2 md:mt-0 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
        onClick={handleStuff}
      >
        Stuff Bits
      </button>
      {error && (
        <p className="text-red-600 text-sm mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
