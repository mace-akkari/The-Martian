import React from "react";
import './App.css';
import { Header } from './components/Header'
import { Buttons } from "./components/HexButtons";
import { Screen1 } from "./components/MarksScreen"
import { Screen2 } from "./components/HexCodeScreen"
import { Footer } from "./components/Footer";


function Rover() {
  return (
    <div className="App">
      <Header />
      <Screen1 />
      <Screen2 />
      <Buttons />
      <Footer />
      
    </div>
  );
}

export default Rover;
