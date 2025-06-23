import React from "react";
import { useNavigate } from "react-router-dom";

const modules = [
  {
    id: "nutrition",
    title: "Nutrition Explorer",
    description: "Explore the world of healthy eating! Guide children through fun games that teach balanced diets, food groups, and smart meal choices.",
    image: "https://cdn-icons-png.flaticon.com/512/4264/4264893.png"
  },
  {
    id: "yoga",
    title: "Yoga Moves",
    description: "Help kids stay active and calm by introducing simple yoga postures. Teach mindfulness and movement in a playful way.",
    image: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png"
  },
  {
    id: "mental-health",
    title: "Mind & Mood",
    description: "Promote emotional well-being! Use games and stories to help children identify feelings and build a healthy mindset.",
    image: "https://cdn-icons-png.flaticon.com/512/4320/4320348.png"
  }
];

function InstructorDashboard() {
  const navigate = useNavigate();

  const handleSelectModule = (moduleId) => {
    navigate(`/instructor/module/${moduleId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-green-100 py-10 px-4 sm:px-10 font-sans">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-4">Instructor Dashboard</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Select a learning module to begin a fun, engaging, and educational session with your students.
        Each module contains game-based activities designed to teach important health and wellness topics.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {modules.map((mod) => (
          <div
            key={mod.id}
            className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl border border-emerald-200 transition transform hover:scale-105 cursor-pointer"
            onClick={() => handleSelectModule(mod.id)}
          >
            <img
              src={mod.image}
              alt={mod.title}
              className="w-24 h-24 mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-emerald-700 text-center mb-2">{mod.title}</h2>
            <p className="text-gray-700 text-sm text-center">{mod.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstructorDashboard;
