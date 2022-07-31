import React, { Component } from 'react';
import NavBar from "./components/navbar";
import Intro from './components/intro';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <main className="container">
          <Intro />
        </main>
      </React.Fragment>
    );
  }
  
    
}

export default App;
