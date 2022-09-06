import React from "react";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Team_Page from "./components/team_page"

function App() {
    return (
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/team_page" element={<Team_Page />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
