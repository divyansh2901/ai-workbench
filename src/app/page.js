import { useState } from "react";
import { getSummary } from "../services/api";

export default function Home() {
  const [summary, setSummary] = useState("");

  const handleSummary = async () => {
    const res = await getSummary();
    setSummary(res.summary);
  };

  return (
    <div className="flex h-screen">

      <div className="w-1/5 bg-gray-100 p-4">Rooms</div>

      <div className="w-3/5 flex flex-col">
        <div className="flex-1 p-4">Chat...</div>
      </div>

      <div className="w-1/5 bg-gray-50 p-4">
        <button onClick={handleSummary} className="bg-blue-500 text-white px-3 py-1 rounded">
          Generate Summary
        </button>

        <p className="mt-4">{summary}</p>
      </div>

    </div>
  );
}