"use client";

import { useState, useEffect } from "react";

export default function NewLecture() {
  const [chapterName, setChapterName] = useState("");
  const [notes, setNotes] = useState(null);
  const [showStartLecture, setShowStartLecture] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [duration, setDuration] = useState(45); // Default duration

  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  const handleNext = () => {
    setShowStartLecture(true);
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    setElapsedTime(0);
    // Start audio recording logic here
    console.log("Recording started...");
  };

  const handleFinishLecture = () => {
    setIsRecording(false);
    // Stop audio recording logic here
    console.log("Recording stopped.");
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!showStartLecture ? (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-indigo-700 mb-6 text-center">New Lecture</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="chapterName" className="block text-gray-700 font-medium mb-2">
                Chapter Name
              </label>
              <input
                type="text"
                id="chapterName"
                value={chapterName}
                onChange={(e) => setChapterName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter chapter name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">
                Upload Notes
              </label>
              <input
                type="file"
                id="notes"
                onChange={(e) => setNotes(e.target.files[0])}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="duration" className="block text-gray-700 font-medium mb-2">
                Select Duration
              </label>
              <select
                id="duration"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="40">40 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="55">55 Minutes</option>
                <option value="60">60 Minutes</option>
              </select>
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
            >
              Next
            </button>
          </form>
        </div>
      ) : isRecording ? (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-indigo-700 mb-6">New Lecture</h1>
          <p className="text-xl font-medium text-gray-700 mb-4">{formatTime(elapsedTime)} / {duration}:00</p>
          <button
            onClick={handleFinishLecture}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
          >
            Finish Lecture
          </button>
          <div className="mt-6 bg-gray-200 h-32 rounded-lg">
            {/* Placeholder for audio waveform */}
            <p className="text-gray-500">Audio waveform visualization</p>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-indigo-700 mb-6">Start Lecture</h1>
          <div className="flex flex-col items-center">
            <button
              onClick={handleStartRecording}
              className="w-24 h-24 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
                />
              </svg>
            </button>
            <p className="mt-4 text-lg font-medium text-gray-700">{duration} Minutes</p>
          </div>
        </div>
      )}
    </div>
  );
}