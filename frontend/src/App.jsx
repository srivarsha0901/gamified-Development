import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import InstructorRegister from "./pages/InstructorRegister";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/instructor/register" element={<InstructorRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
