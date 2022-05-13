import React from "react";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/about" element={<About />} exact />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
