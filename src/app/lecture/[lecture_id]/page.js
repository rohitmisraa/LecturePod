const lectureData = [
  {
    id: 1,
    summary: "Thermodynamics is a fundamental branch of physics that examines how heat, energy, and work interact in natural systems. It explores the principles governing energy transfer, the laws of thermodynamics, and the concept of entropy. Students will learn how energy changes form—such as chemical energy to thermal energy—and how these changes affect systems ranging from simple engines to complex biological organisms. The course emphasizes real-world applications like engines, refrigerators, power plants, and even natural processes in living beings. By studying thermodynamics, learners develop an understanding of equilibrium, spontaneity of reactions, and efficiency of energy usage. This topic bridges physics, chemistry, and engineering, making it essential for anyone interested in science or technology.",
    notes: "Thermodynamics_Notes.pdf",
    quiz: { bestScore: 42, totalAttempts: 12 },
    flashcards: "Thermodynamics_Flashcards.json",
  },
  {
    id: 2,
    summary: "Motion is one of the most fundamental concepts in physics, dealing with how and why objects move. It includes studying velocity, acceleration, displacement, and the forces acting upon a body. Students will explore different types of motion, such as linear, circular, and oscillatory motion, while also understanding Newton’s laws of motion. Real-life applications include analyzing how cars accelerate, how projectiles follow trajectories, and how planets orbit in space. The lecture builds intuition about everyday phenomena, from walking to the functioning of machines. By mastering motion, learners gain a foundation for advanced studies in mechanics, engineering, and robotics.",
    notes: "Motion_Notes.pdf",
    quiz: { bestScore: 38, totalAttempts: 10 },
    flashcards: "Motion_Flashcards.json",
  },
  {
    id: 3,
    summary: "Waves are a vital topic in physics that describe how energy travels without the transfer of matter. This lecture introduces mechanical waves such as sound and water waves, as well as electromagnetic waves like light. Students will learn key properties, including amplitude, frequency, wavelength, and speed, along with concepts like interference, reflection, and refraction. Waves are everywhere: they allow us to hear sound, see light, and communicate via radio or mobile phones. The study of waves connects multiple scientific fields, from acoustics and optics to quantum mechanics. Understanding wave behavior lays the foundation for technologies such as fiber optics, medical imaging, and seismology.",
    notes: "Waves_Notes.pdf",
    quiz: { bestScore: 45, totalAttempts: 15 },
    flashcards: "Waves_Flashcards.json",
  },
  {
    id: 4,
    summary: "Optics deals with the fascinating behavior of light and its interactions with different materials. This lecture explores concepts such as reflection, refraction, diffraction, and interference, which together explain everyday phenomena like rainbows, mirages, and lenses. Optics also covers the study of lenses, prisms, and mirrors, making it an essential subject for understanding vision, photography, and laser technology. Students will learn how optical instruments, including microscopes, telescopes, and cameras, are designed. Beyond its scientific applications, optics is central to fields like medicine (endoscopy, laser surgery), telecommunications (fiber optics), and even art. By mastering optics, learners connect theoretical physics with real-world applications.",
    notes: "Optics_Notes.pdf",
    quiz: { bestScore: 40, totalAttempts: 8 },
    flashcards: "Optics_Flashcards.json",
  },
  {
    id: 5,
    summary: "Introduction to Python provides a beginner-friendly pathway into programming, focusing on one of the world’s most widely used languages. The lecture introduces Python syntax, variables, data types, and control structures like loops and conditionals. Students will also explore functions, lists, and dictionaries, which form the backbone of many applications. Python’s simplicity makes it an excellent starting point for coding, whether in web development, data analysis, or artificial intelligence. This lecture highlights Python’s versatility with examples from real-world applications, including automation scripts, simple games, and data visualization. Learners gain practical coding experience while developing problem-solving skills crucial for modern careers.",
    notes: "Python_Intro_Notes.pdf",
    quiz: { bestScore: 50, totalAttempts: 20 },
    flashcards: "Python_Intro_Flashcards.json",
  },
  {
    id: 6,
    summary: "Data Structures form the backbone of efficient programming. This lecture introduces arrays, linked lists, stacks, queues, and trees, explaining how each stores and organizes data. Students will learn about the strengths and weaknesses of different data structures and how choosing the right one impacts performance. Practical examples include managing playlists, handling undo operations in editors, or storing hierarchical data like file systems. By understanding how to implement and manipulate these structures in Python, learners prepare themselves for solving complex problems in software development. Mastery of data structures is crucial for building scalable applications and performing well in coding interviews.",
    notes: "Data_Structures_Notes.pdf",
    quiz: { bestScore: 48, totalAttempts: 18 },
    flashcards: "Data_Structures_Flashcards.json",
  },
  {
    id: 7,
    summary: "Algorithms are step-by-step procedures for solving problems, and they are at the heart of computer science. This lecture covers fundamental algorithms for searching, sorting, and optimization, including bubble sort, binary search, and greedy techniques. Students will learn how to evaluate efficiency using time and space complexity (Big-O notation). The lecture emphasizes practical applications, such as searching data in large files, arranging items in order, and optimizing routes in navigation apps. By mastering algorithms, learners improve their logical thinking and coding efficiency. This topic prepares students for advanced areas like machine learning, cryptography, and systems design.",
    notes: "Algorithms_Notes.pdf",
    quiz: { bestScore: 46, totalAttempts: 14 },
    flashcards: "Algorithms_Flashcards.json",
  },
  {
    id: 8,
    summary: "Advanced Calculus expands on the foundational concepts of calculus, focusing on integrals, derivatives, and differential equations. Students will explore both theoretical and practical applications, such as calculating areas, understanding motion, and modeling growth. The lecture also covers multivariable calculus, which is essential in fields like physics, engineering, and economics. Real-world examples include analyzing population dynamics, predicting planetary motion, and studying heat transfer. By learning advanced calculus, students develop the ability to model and solve complex problems across disciplines. The subject emphasizes both problem-solving skills and a deeper appreciation for mathematical theory.",
    notes: "Calculus_Notes.pdf",
    quiz: { bestScore: 44, totalAttempts: 16 },
    flashcards: "Calculus_Flashcards.json",
  },
  {
    id: 9,
    summary: "Linear Algebra focuses on vectors, matrices, and their role in solving systems of equations. Students will learn operations on matrices, determinants, eigenvalues, and eigenvectors, which have applications in computer graphics, machine learning, and physics. This lecture highlights how linear algebra simplifies complex problems, such as transforming images, compressing data, and analyzing networks. Real-world use cases include search engines, recommendation systems, and 3D modeling. The subject connects abstract mathematical concepts to tangible applications, making it vital for modern technology. By mastering linear algebra, learners build skills applicable to artificial intelligence, data science, and computational sciences.",
    notes: "Linear_Algebra_Notes.pdf",
    quiz: { bestScore: 47, totalAttempts: 19 },
    flashcards: "Linear_Algebra_Flashcards.json",
  },
  {
    id: 10,
    summary: "Probability introduces students to the mathematics of uncertainty and randomness. This lecture covers probability rules, random variables, probability distributions, and statistical inference. Real-world examples include predicting weather, calculating risks in finance, and analyzing games of chance. Probability forms the basis of statistics and is crucial in fields like data science, machine learning, and artificial intelligence. By mastering probability, students gain tools to model uncertainty, make informed predictions, and understand variability in data. This topic equips learners with both theoretical foundations and practical applications, making it a cornerstone for careers in science, engineering, and analytics.",
    notes: "Probability_Notes.pdf",
    quiz: { bestScore: 49, totalAttempts: 21 },
    flashcards: "Probability_Flashcards.json",
  },
  {
    id: 11,
    summary: "Organic Chemistry focuses on the study of carbon-based compounds and their reactions. Students will explore molecular structures, functional groups, reaction mechanisms, and stereochemistry. Organic chemistry is vital in pharmaceuticals, polymers, fuels, and countless industrial products. The lecture highlights the role of organic molecules in life processes, such as DNA and proteins. Learners will see how everyday items like plastics, medicines, and cosmetics are rooted in organic chemistry. The subject combines theoretical understanding with laboratory practices, developing analytical skills. By mastering organic chemistry, students gain insights into both scientific research and practical innovations.",
    notes: "Organic_Chemistry_Notes.pdf",
    quiz: { bestScore: 43, totalAttempts: 11 },
    flashcards: "Organic_Chemistry_Flashcards.json",
  },
  {
    id: 12,
    summary: "Inorganic Chemistry explores the properties and behaviors of elements and compounds that are not carbon-based. This lecture introduces concepts like bonding, crystal structures, coordination chemistry, and periodic trends. Inorganic chemistry explains the role of metals, minerals, and salts in both natural and industrial processes. Applications include materials science, catalysts in chemical reactions, and bioinorganic functions in the human body. Students will understand how inorganic compounds shape industries like electronics, metallurgy, and energy storage. By studying inorganic chemistry, learners gain knowledge that bridges chemistry, environmental science, and engineering.",
    notes: "Inorganic_Chemistry_Notes.pdf",
    quiz: { bestScore: 41, totalAttempts: 9 },
    flashcards: "Inorganic_Chemistry_Flashcards.json",
  },
  {
    id: 13,
    summary: "Physical Chemistry connects physics and chemistry to study the physical principles underlying chemical systems. This lecture covers thermodynamics, kinetics, quantum mechanics, and spectroscopy, focusing on how molecules behave and interact. Students will learn how to measure and predict reaction rates, energy changes, and molecular structures. Physical chemistry plays a crucial role in industries ranging from pharmaceuticals to renewable energy. Real-world applications include battery development, drug design, and nanotechnology. By understanding physical chemistry, learners acquire tools to analyze and design new materials and processes, linking fundamental science with technological advancement.",
    notes: "Physical_Chemistry_Notes.pdf",
    quiz: { bestScore: 39, totalAttempts: 7 },
    flashcards: "Physical_Chemistry_Flashcards.json",
  },
];


export default function LectureDetails({ params }) {
  const { lecture_id } = params;
  const lecture = lectureData.find((item) => item.id === parseInt(lecture_id));

  if (!lecture_id || isNaN(lecture_id)) {
    return <div className="text-center py-10">Invalid lecture ID.</div>;
  }

  if (!lecture) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Lecture not found</h1>
          <p className="text-gray-600 mt-2">The lecture ID you provided does not exist. Please check and try again.</p>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white py-3 shadow-md px-5">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          
        </div>
      </header>

      <main className="container mx-auto py-6 px-4 grid gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800">Physics Lecture</h1>
          <p className="text-lg text-gray-600">Chapter {lecture.id} </p>
          <p className="text-sm text-gray-500">Date: 12-09-2025</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Summary</h2>
          <p className="text-gray-600">{lecture.summary}</p>
          {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition">
            Read Full Summary &rarr;
          </button> */}
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">View the Notes here</h2>
          <button className="bg-yellow-500 text-indigo-900 py-2 px-4 rounded-lg hover:bg-yellow-400 transition">
            Download Notes
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Quiz</h2>
          <p className="text-gray-600">Best Score: {lecture.quiz.bestScore}</p>
          <p className="text-gray-600">Total Attempts: {lecture.quiz.totalAttempts}</p>
          <div className="mt-4">
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition mr-2">
              <a href={`/quiz/${lecture.id}`}>Start Quiz</a>
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-400 transition">
              Reset Quiz
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Flashcards</h2>
          <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-400 transition">
            Export Flashcards Data
          </button>
        </div>
      </main>
    </div>
  );
}