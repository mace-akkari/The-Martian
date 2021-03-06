import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Buttons } from "./components/HexButtons";
import { MarksScreen } from "./components/MarksScreen";
import { HexCodeScreen } from "./components/HexCodeScreen";
import { Footer } from "./components/Footer";
import { SharedScreen } from "./components/SharedScreen";

function App() {
  const [state, setState] = useState({ hex: "", message: "" });
  const handler = (value) => setState({ hex: state.hex + value});

  const [charMessage, setCharMessage] = useState({user: '', message: ''});
  const screenSubmitHandler = (name, message) => {
    setCharMessage({
      user: name,
      message,
    })
  }

  const [hexMessage, setHexMessage] = useState ({
    nasaUser: "",
    nasaMessage: "",
  })

  return (
    <div className="App">
      <Header />
      <MarksScreen setCharMessage={screenSubmitHandler} />
      <HexCodeScreen hex={state.hex} setHexMessage={setHexMessage} />
      <SharedScreen communication={charMessage} communication={setHexMessage}/>
      <Buttons clickHandler={handler} />
      <Footer />
    </div>
  );
}

export default App;
