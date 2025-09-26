"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";

const classes = [
  {
    id: 1,
    title: "Physics",
    slug: "physics",
    description: "Explore the fundamental principles of matter, energy, and motion. Dive into topics like mechanics, thermodynamics, and electromagnetism to understand the universe better.",
  },
  {
    id: 2,
    title: "Basic Python",
    slug: "basic-python",
    description: "Learn the basics of Python programming, including syntax, data structures, and simple algorithms. Perfect for beginners looking to start coding.",
  },
  {
    id: 3,
    title: "Mathematics",
    slug: "mathematics",
    description: "Strengthen your understanding of algebra, geometry, calculus, and more. Develop problem-solving skills essential for academic and real-world applications.",
  },
  {
    id: 4,
    title: "Chemistry",
    slug: "chemistry",
    description: "Discover the science of substances, their properties, and reactions. Topics include organic, inorganic, and physical chemistry.",
  },
];

const availableclasses = [
  {
    id: 5,
    title: "Advanced Physics",
    slug: "advanced-physics",
    description: "Dive deeper into quantum mechanics and relativity. Explore advanced topics in physics.",
    code: "PHYS123",
  },
  {
    id: 6,
    title: "Data Science Basics",
    slug: "data-science-basics",
    description: "Learn the fundamentals of data analysis, visualization, and machine learning.",
    code: "DS456",
  },
  {
    id: 7,
    title: "Organic Chemistry",
    slug: "organic-chemistry",
    description: "Understand the principles of organic reactions and molecular structures.",
    code: "CHEM789",
  },
];

export default function Dashboard() {
  const userType = Cookies.get("userType") || "Student";

  const [showModal, setShowModal] = useState(false);
  const [newClass, setNewClass] = useState("");
  const [classCode, setClassCode] = useState("");
  const [lectureList, setLectureList] = useState(classes);

  const navigateToLecture = (id) => {
    window.location.href = `/lectures/${id}`;
  };

  const handleAddClass = () => {
    if (userType === "Student" && classCode) {
      const lectureToAdd = availableclasses.find((lecture) => lecture.code === classCode);
      if (lectureToAdd) {
        setLectureList([...lectureList, { id: lectureToAdd.id, title: lectureToAdd.title, description: lectureToAdd.description }]);
      } else {
        alert("Invalid class code.");
      }
    } else if (userType === "Teacher" && newClass) {
      setLectureList([...lectureList, { id: lectureList.length + 1, title: newClass, description: "Created by teacher." }]);
    }
    setShowModal(false);
    setNewClass("");
    setClassCode("");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-5">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            className="bg-yellow-500 text-indigo-900 py-2 px-4 rounded-lg hover:bg-yellow-400 transition"
            onClick={() => setShowModal(true)}
          >
            Add Class +
          </button>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 text-gray-600">
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lectureList.map((lecture) => (
              <div key={lecture.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{lecture.title}</h3>
                <p className="text-gray-600 mb-4">{lecture.description}</p>
                <Link href={`/lectures/${lecture.slug}`} className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition inline-block">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black/5 flex items-center justify-center">
          <div className="bg-white text-gray-600 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">{userType === "Student" ? "Join Class" : "Create Class"}</h2>
            {userType === "Student" ? (
              <div className="mb-4">
                <label htmlFor="classCode" className="block text-gray-700 font-medium mb-2">
                  Class Code
                </label>
                <input
                  type="text"
                  id="classCode"
                  value={classCode}
                  onChange={(e) => setClassCode(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter class code"
                />
              </div>
            ) : (
              <div className="mb-4">
                <label htmlFor="newClass" className="block text-gray-700 font-medium mb-2">
                  Class Name
                </label>
                <input
                  type="text"
                  id="newClass"
                  value={newClass}
                  onChange={(e) => setNewClass(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter class name"
                />
              </div>
            )}
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                onClick={handleAddClass}
              >
                {userType === "Student" ? "Join" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}