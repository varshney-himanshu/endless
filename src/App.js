import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <HowItWorks />
      </div>
    );
  }
}

export default App;
