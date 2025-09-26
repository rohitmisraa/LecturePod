import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-indigo-700 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">LecturePod</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" legacyBehavior>
              <a className="hover:text-yellow-400 transition">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/features" legacyBehavior>
              <a className="hover:text-yellow-400 transition">Features</a>
            </Link>
          </li>
          <li>
            <Link href="/faq" legacyBehavior>
              <a className="hover:text-yellow-400 transition">FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="/get-started" legacyBehavior>
              <a className="bg-yellow-500 text-indigo-900 py-2 px-4 rounded-lg hover:bg-yellow-400 transition">Get Started</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
