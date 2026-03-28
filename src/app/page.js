export default function Home() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-1/5 bg-gray-100 p-4">
        <h2 className="font-bold">Rooms</h2>
      </div>

      {/* Chat */}
      <div className="w-3/5 flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto">
          <p>Chat messages...</p>
        </div>

        <div className="p-4 border-t">
          <input 
            className="w-full border p-2 rounded"
            placeholder="Type a message..."
          />
        </div>
      </div>

      {/* AI Panel */}
      <div className="w-1/5 bg-gray-50 p-4">
        <h2 className="font-bold">AI Panel</h2>
        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
          Generate Summary
        </button>
      </div>

    </div>
  );
}