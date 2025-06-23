import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InstructorLogin from "./pages/InstructorLogin";
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/instructor/login" element={<InstructorLogin />} />

      </Routes>
    </Router>
  );
}

export default App;