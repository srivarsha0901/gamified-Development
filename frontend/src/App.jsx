import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
<<<<<<< HEAD
import InstructorLogin from "./pages/InstructorLogin";
import './App.css'
=======
import InstructorRegister from "./pages/InstructorRegister";
import AdminLogin from "./pages/AdminLogin";
import "./App.css";
>>>>>>> c58b186de3be94f8184b0c4f9e9784af623434a9
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
        <Route path="/instructor/login" element={<InstructorLogin />} />

=======
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/instructor/register" element={<InstructorRegister />} />
>>>>>>> c58b186de3be94f8184b0c4f9e9784af623434a9
      </Routes>
    </Router>
  );
}

export default App;
