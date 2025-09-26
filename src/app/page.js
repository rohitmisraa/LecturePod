import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="font-sans bg-gradient-to-b from-indigo-600 to-indigo-800 text-gray-100">
      <Navbar />
      {/* Hero Section */}
      <header className="text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold mb-6">Welcome to LecturePod</h1>
          <p className="text-2xl font-light mb-8 max-w-3xl mx-auto">
            Revolutionizing teaching with AI-powered lecture summarization. Save time, enhance productivity, and focus on what matters most.
          </p>
          <a
            href="/get-started"
            className="inline-block bg-yellow-500 text-indigo-900 py-4 px-10 rounded-lg text-xl font-medium hover:bg-yellow-400 transition"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Features Section */}
      <main className="container mx-auto py-16 px-6">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-gray-50">Features</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            Discover how LecturePod can transform your teaching experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-gray-800 shadow-lg rounded-lg text-center">
              <Image
                src="/file.svg"
                alt="Upload Icon"
                width={80}
                height={80}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-medium mb-4 text-gray-50">Upload Your Lecture</h3>
              <p className="text-gray-300">
                Easily upload your lecture recordings or transcripts for processing.
              </p>
            </div>

            <div className="p-8 bg-gray-800 shadow-lg rounded-lg text-center">
              <Image
                src="/globe.svg"
                alt="AI Processing Icon"
                width={80}
                height={80}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-medium mb-4 text-gray-50">AI-Powered Summarization</h3>
              <p className="text-gray-300">
                Let our advanced AI generate concise and accurate summaries for you.
              </p>
            </div>

            <div className="p-8 bg-gray-800 shadow-lg rounded-lg text-center">
              <Image
                src="/window.svg"
                alt="Download Icon"
                width={80}
                height={80}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-medium mb-4 text-gray-50">Download and Share</h3>
              <p className="text-gray-300">
                Get your summaries in a shareable format instantly.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-gray-50">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto text-left">
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-50">What is LecturePod?</h3>
              <p className="text-gray-300">
                LecturePod is an AI-powered tool designed to help teachers summarize their lectures into concise notes.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-50">How does it work?</h3>
              <p className="text-gray-300">
                Simply upload your lecture recordings or transcripts, and our AI will process and generate summaries for you.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-50">Is it free to use?</h3>
              <p className="text-gray-300">
                LecturePod offers both free and premium plans to suit your needs.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-50">Stay Connected</h3>
            <p className="text-gray-400">Follow us on social media for updates and tips.</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-gray-50">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-gray-50">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-gray-50">LinkedIn</a>
          </div>
          <p className="text-sm">&copy; 2025 LecturePod. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
