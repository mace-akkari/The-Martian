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
  const [charMessage, setCharMessage] = useState({ message: "" });
  const messageHandler = (aMsg) => setCharMessage({ message: charMessage.message + aMsg})
  return (
    <div className="App">
      <Header />
      <MarksScreen clickHandler={messageHandler} />
      <HexCodeScreen hex={state.hex} />
      <SharedScreen name={charMessage.message} />
      <Buttons clickHandler={handler} />
      <Footer />
    </div>
  );
}

export default Rover;
