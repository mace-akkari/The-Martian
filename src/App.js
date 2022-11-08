import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Buttons from "./components/HexButtons";
import MissonControl from "./components/MissonControl";
import HexCodeScreen from "./components/HexCodeScreen";
import Footer from "./components/Footer";
import SharedScreen from "./components/SharedScreen";

const stringToHex = (str) => {
  return str
    .split("")
    .map((char) => char.charCodeAt(0))
    .map((dec) => dec.toString(16));
};

const hexToString = (hex) => {
  if (hex.length % 2 !== 0) {
    return null;
  } else {
    return hex
      .split("")
      .flatMap((el, i, arr) => {
        const pair = [];
        if (i % 2 === 0) {
          pair.push(el + arr[i + 1]);
        }
        return pair;
      })
      .map((pair) => parseInt(pair, 16))
      .map((ascii) => String.fromCharCode(ascii))
      .join("");
  }
};

function App() {
  const [hexMessage, setHexMessage] = useState("");
  const hexHandler = (message) => {
    setHexMessage(stringToHex(message).join(""));
  };
  const handler = (value) => {
    setHexMessage(`${hexMessage}${value}`);
  };

  return (
    <div className="App">
      <Header />
      <MissonControl setHexMessage={hexHandler} />
      <HexCodeScreen hex={hexMessage} hexMessageHandler={setHexMessage} />
      <SharedScreen communication={hexToString(hexMessage)} />
      <Buttons clickHandler={handler} />
      <Footer />
    </div>
  );
}

export default App;
