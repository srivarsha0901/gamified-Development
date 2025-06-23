import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InstructorLogin from "./pages/InstructorLogin";
import "./App.css";
import InstructorRegister from "./pages/InstructorRegister";
import AdminLogin from "./pages/AdminLogin";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/instructor/login" element={<InstructorLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/instructor/register" element={<InstructorRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
