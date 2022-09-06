import React from "react";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import { Routes, Route, Router } from 'react-router-dom'
import Team_Page from "./components/team_page"

function App() {
    return (
      <div className="App">
        <NavBar />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/team_page" element={<Team_Page />} />
          </Routes>
        
      </div>
    );
}

export default App;
