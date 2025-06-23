import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to Janajagriti Learning Platform</h1>
      <button onClick={() => navigate("/admin/login")}>👨‍💼 Admin Login</button><br /><br />
      <button onClick={() => navigate("/instructor/login")}>👩‍🏫 Instructor Login</button><br /><br />
      <button onClick={() => navigate("/student/join")}>👧 Student Join Session</button>
    </div>
  );
}

export default HomePage;
