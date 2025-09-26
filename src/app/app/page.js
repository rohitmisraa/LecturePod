"use client";
import { useState, useEffect } from "react";

export default function MobileAppPage() {
  const [urls, setUrls] = useState([]);
  const [newUrl, setNewUrl] = useState("");

  useEffect(() => {
    const storedUrls = JSON.parse(localStorage.getItem("urls")) || [];
    setUrls(storedUrls);
  }, []);

  const handleAddUrl = () => {
    if (!newUrl) return;
    const updatedUrls = [...urls, newUrl];
    setUrls(updatedUrls);
    localStorage.setItem("urls", JSON.stringify(updatedUrls));
    setNewUrl("");
  };

  const handleDeleteUrl = (urlToDelete) => {
    const updatedUrls = urls.filter((url) => url !== urlToDelete);
    setUrls(updatedUrls);
    localStorage.setItem("urls", JSON.stringify(updatedUrls));
  };

  const handleOpenUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen text-gray-700 bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h1 className="text-xl font-bold text-indigo-700 mb-4">Manage URLs</h1>
        <div className="flex space-x-2">
          <input
            type="text"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter URL"
          />
          <button
            onClick={handleAddUrl}
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          >
            Add Link
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Links</h2>
        <ul className="space-y-2">
          {urls.map((url, index) => (
            <li
              key={index}
              className="flex justify-between items-center border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-200 transition"
            >
              <span
                onClick={() => handleOpenUrl(url)}
                className="text-indigo-600 cursor-pointer hover:underline"
              >
                {url}
              </span>
              <button
                onClick={() => handleDeleteUrl(url)}
                className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}