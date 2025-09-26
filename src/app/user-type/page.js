"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function UserType() {
  const [selectedType, setSelectedType] = useState(null);
  const router = useRouter();

  const handleSelection = (type) => {
    setSelectedType(type);
    Cookies.set("userType", type, { expires: 7 }); // Store user type in cookies for 7 days
    router.push(`/dashboard?userType=${type}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-indigo-700 mb-6">Select User Type</h1>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleSelection("Student")}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          >
            Student
          </button>
          <button
            onClick={() => handleSelection("Teacher")}
            className="w-full bg-yellow-500 text-indigo-900 py-2 px-4 rounded-lg hover:bg-yellow-400 transition"
          >
            Teacher
          </button>
        </div>
      </div>
    </div>
  );
}