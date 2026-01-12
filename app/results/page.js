// app/results/page.js
export default function ResultsPage() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8 text-green-600">Analysis Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded shadow-sm">
          <h2 className="font-semibold text-xl">Resume Score</h2>
          <p className="text-4xl font-bold mt-2">--/100</p>
        </div>
        <div className="p-6 border rounded shadow-sm">
          <h2 className="font-semibold text-xl">AI Feedback</h2>
          <p className="mt-2 text-gray-500">Analysis pending...</p>
        </div>
      </div>
    </div>
  );
}