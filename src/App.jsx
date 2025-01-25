// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import './styles/App.css'
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Projects from "./Pages/Projects/Projects";
import Profile from "./Pages/Profile/Profile";

function App() {

  return (
    <section className="font-normal select-none">

      <Header />
      <div className="border-solid border-2 border-red-600 container flex flex-wrap mx-auto gap-4">
        <Profile />
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
      </div>





      <Footer />
    </section>

  )
}

export default App
