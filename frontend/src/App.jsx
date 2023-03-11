import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditResume from "./pages/EditResume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit-resume" element={<EditResume />} />
    </Routes>
  );
}

export default App;
