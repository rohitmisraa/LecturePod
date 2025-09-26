"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ApproveLecture() {
  const router = useRouter();
  const [lectureTitle, setLectureTitle] = useState("");
  const [lectureFile, setLectureFile] = useState(null);

  const handleApproveLecture = () => {
    if (!lectureTitle || !lectureFile) {
      alert("Please provide a title and upload a file.");
      return;
    }
    alert(`Lecture titled '${lectureTitle}' has been approved and uploaded!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Approve and Upload Lecture</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Lecture Title</label>
          <input
            type="text"
            value={lectureTitle}
            onChange={(e) => setLectureTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter lecture title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Upload Lecture File</label>
          <input
            type="file"
            onChange={(e) => setLectureFile(e.target.files[0])}
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          onClick={handleApproveLecture}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
        >
          Approve and Upload
        </button>
      </div>
    </div>
  );
}
