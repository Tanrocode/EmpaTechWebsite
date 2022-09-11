import React from "react";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import { Routes, Route, Router } from 'react-router-dom'
import Team_Page from "./components/team_page"
import Projects_Page from "./components/projects_page"
import Footer from "./components/footer"

function App() {
    return (
      <div className="App">
        <NavBar />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/team_page" element={<Team_Page />} />
            <Route path="/projects" element={<Projects_Page />} />
          </Routes>
        <Footer />
        
      </div>
    );
}

export default App;
