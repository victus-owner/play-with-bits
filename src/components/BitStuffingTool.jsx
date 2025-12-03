import { useState } from "react";
import DecimalInput from "./DecimalInput";
import StuffingInput from "./StuffingInput";
import Results from "./Results";
import { Link } from "react-router-dom";

export default function BitStuffingTool() {
  const [binary, setBinary] = useState("");
  const [k, setK] = useState(null);
  const [stuffedBinary, setStuffedBinary] = useState("");
  const [stuffedDecimal, setStuffedDecimal] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBinary = (bin) => {
    setBinary(bin);
    setK(null);
    setStuffedBinary("");
    setStuffedDecimal(null);
  };

  const handleResult = ({ k, stuffedBinary, stuffedDecimal }) => {
    setLoading(true);
    setTimeout(() => {
      setK(k);
      setStuffedBinary(stuffedBinary);
      setStuffedDecimal(stuffedDecimal);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 pb-16">

      {/* NAVBAR */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 px-6 py-3 flex items-center justify-between">

        <img
          src="/logo.jpg"
          alt="Logo"
          style={{ width: "220px", height: "auto" }}
          className="object-contain mx-auto sm:mx-0"
        />

        <Link
          to="/FrontPage/Dashboard"
          className="hidden sm:block bg-indigo-500 text-white px-5 py-2 rounded-lg font-semibold
          hover:bg-indigo-600 hover:scale-105 transition-all duration-300 shadow-sm"
        >
          About Us
        </Link>

        <button
          className="block sm:hidden text-indigo-600 text-3xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="absolute top-16 right-6 bg-white shadow-lg rounded-xl py-3 px-5 text-center w-40 sm:hidden">
            <Link
              to="/FrontPage/Dashboard"
              onClick={() => setMenuOpen(false)}
              className="block bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-600 transition-all"
            >
              About Us
            </Link>
          </div>
        )}
      </nav>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 pt-28">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Bit Stuffing Playground</h1>
          <p className="text-gray-600 mt-2">
            Convert decimal numbers to binary & perform bit stuffing (insert 0 after k ones)
          </p>
        </header>

        <main className="bg-white rounded-2xl shadow-lg p-6 space-y-6">

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-indigo-700">Inputs</h2>
            <p className="text-sm text-gray-500">Step 1: Enter a decimal number</p>

            <DecimalInput onBinary={handleBinary} />
            {binary && <StuffingInput binary={binary} onResult={handleResult} />}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-700 mb-3">Results</h2>

            {loading ? (
              <div className="flex justify-center py-10">
                <div className="animate-spin h-10 w-10 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <Results
                binary={binary}
                k={k}
                stuffedBinary={stuffedBinary}
                stuffedDecimal={stuffedDecimal}
              />
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
