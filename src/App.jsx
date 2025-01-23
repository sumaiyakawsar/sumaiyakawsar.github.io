// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import './styles/App.css'
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Projects from "./Pages/Projects/Projects";


function App() {

  return (
    <section className="font-normal select-none">

      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/about"
          element={<AboutMe />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />
      </Routes>
      <Footer />
    </section>

  )
}

export default App
