import './App.css';
import { Header } from './components/Header'
import { Buttons } from "./components/HexButtons";
import { Screen1 } from "./components/MarksScreen"
import { Footer } from "./components/Footer";


function Rover() {
  return (
    <div className="App">
      <Header />
      <Screen1 />
      <Buttons />
      <Footer />
      
    </div>
  );
}

export default Rover;
