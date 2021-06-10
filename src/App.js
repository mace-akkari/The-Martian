import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Buttons } from "./components/HexButtons";
import { MarksScreen } from "./components/MarksScreen";
import { HexCodeScreen } from "./components/HexCodeScreen";
import { Footer } from "./components/Footer";
import { SharedScreen } from "./components/SharedScreen";

function Rover() {
  const [state, setState] = useState({ hex: "", message: "" });
  const handler = (value) => setState({ hex: state.hex + value});
  return (
    <div className="App">
      <Header />
      <MarksScreen />
      <HexCodeScreen hex={state.hex} />
      <SharedScreen />
      <Buttons clickHandler={handler} />
      <Footer />
    </div>
  );
}

export default Rover;
