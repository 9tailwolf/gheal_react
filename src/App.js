import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Third_music from "./pages/Third_music"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AI" element={<First />} />
        <Route path="Garden" element={<Second />} />
        <Route path="Player" element={<Third />} />
        <Route path="Movie" element={<Third_music />} />
      </Routes>
    </>
  );
}

export default App;