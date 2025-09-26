"use client"
import Link from "next/link";
import { use, useState, useEffect } from "react";

const chapters = [
  { id: 1, title: "Chapter 1 Thermodynamics", date: "12-09-2025", class: "Physics", slug: "physics" },
  { id: 2, title: "Chapter 2 Motion", date: "15-09-2025", class: "Physics", slug: "physics" },
  { id: 3, title: "Chapter 3 Waves", date: "20-09-2025", class: "Physics", slug: "physics" },
  { id: 4, title: "Chapter 4 Optics", date: "25-09-2025", class: "Physics", slug: "physics" },
  { id: 5, title: "Introduction to Python", date: "12-09-2025", class: "Basic Python", slug: "basic-python" },
  { id: 6, title: "Data Structures", date: "15-09-2025", class: "Basic Python", slug: "basic-python" },
  { id: 7, title: "Algorithms", date: "20-09-2025", class: "Basic Python", slug: "basic-python" },
  { id: 8, title: "Advanced Calculus", date: "12-09-2025", class: "Mathematics", slug: "mathematics" },
  { id: 9, title: "Linear Algebra", date: "15-09-2025", class: "Mathematics", slug: "mathematics" },
  { id: 10, title: "Probability", date: "20-09-2025", class: "Mathematics", slug: "mathematics" },
  { id: 11, title: "Organic Chemistry", date: "12-09-2025", class: "Chemistry", slug: "chemistry" },
  { id: 12, title: "Inorganic Chemistry", date: "15-09-2025", class: "Chemistry", slug: "chemistry" },
  { id: 13, title: "Physical Chemistry", date: "20-09-2025", class: "Chemistry", slug: "chemistry" },
];

export default function Lectures({ params }) {
  const { lecture_id } = use(params);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    // Simulate fetching user type (e.g., 'student' or 'teacher')
    const fetchedUserType = "teacher"; // Replace with actual logic
    setUserType(fetchedUserType);
  }, []);

  const filteredChapters = lecture_id
    ? chapters.filter((chapter) => chapter.slug === lecture_id.toLowerCase())
    : chapters;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white py-4 shadow-md px-5">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">LecturePod</h1>
          {userType === "teacher" && (
            <button className="bg-yellow-500 text-indigo-900 py-2 px-4 rounded-lg hover:bg-yellow-400 transition">
              New Lecture +
            </button>
          )}
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 text-gray-600">
        <h2 className="text-xl font-semibold mb-4">All Chapters</h2>
        <div className="grid grid-cols-1 gap-6">
          {filteredChapters.map((chapter) => (
            <Link key={`${chapter.id}-${chapter.slug}`} href={`/lecture/${chapter.id}`}>
              <div className="flex items-center rounded-lg shadow-md p-4 cursor-pointer hover:bg-gray-200 transition">
                <div className="w-12 h-12 bg-green-400 rounded-2xl mr-4"></div>
                <div>
                  <h3 className="text-lg font-medium">{chapter.title}</h3>
                  <p className="text-gray-600">Date: {chapter.date}</p>
                  <p className="text-gray-600">Class: {chapter.class}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}