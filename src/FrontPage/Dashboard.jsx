import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-3xl">

        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-extrabold text-gray-800">Project Submission</h1>

          <Link
            to="/"
            className="px-5 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-sm
            hover:bg-indigo-600 hover:scale-105 transition-all"
          >
            Home
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          <div>
            <h2 className="text-lg font-bold text-indigo-700 mb-3">Submitted By</h2>
            {["Ashish Prajapati", "Aman Kelwa", "Arun Meena", "Ashish Singh"].map((name, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-xl p-3 text-gray-700 font-medium shadow
                hover:bg-indigo-100 hover:scale-105 transition-all cursor-pointer"
              >
                {name}
              </div>
            ))}

            <h2 className="text-lg font-bold text-indigo-700 mt-6 mb-2">Branch</h2>
            <div
              className="bg-gray-100 rounded-xl p-3 text-gray-700 font-semibold shadow
              hover:bg-indigo-100 hover:scale-105 transition-all cursor-pointer"
            >
              Information Technology
            </div>

            <h2 className="text-lg font-bold text-indigo-700 mt-6 mb-2">Batch</h2>
            <div
              className="bg-gray-100 rounded-xl p-3 text-gray-700 font-semibold shadow
              hover:bg-indigo-100 hover:scale-105 transition-all cursor-pointer"
            >
              2023 - 2027
            </div>
          </div>

          <div className="text-right flex flex-col ">
            <h2 className="text-lg font-bold text-indigo-700 mb-3">Submitted To</h2>

            <div
              className="bg-gray-100 rounded-xl p-4 text-indigo-700 font-semibold shadow
              hover:bg-indigo-100 hover:scale-105 transition-all cursor-pointer"
            >
              Mr. Rakesh Verma
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
