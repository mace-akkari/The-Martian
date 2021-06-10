import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Buttons } from "./components/HexButtons";
import { Screen1 } from "./components/MarksScreen";
import { Screen2 } from "./components/HexCodeScreen";
import { Footer } from "./components/Footer";
import { MainScreen } from "./components/SharedScreen";

function Rover() {
  const [state, setState] = useState({ hex: "", message: "" });
  const handler = (value) => setState({ hex: state.hex + value});
  return (
    <div className="App">
      <Header />
      <Screen1 />
      <Screen2 hex={state.hex} />
      <MainScreen />
      <Buttons clickHandler={handler} />
      <Footer />
    </div>
  );
}

export default Rover;
