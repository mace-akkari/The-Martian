import './App.css';
import { Header } from './components/Header'
import { Buttons } from "./components/HexButtons";
import { Footer } from "./components/Footer";


function Rover() {
  return (
    <div className="App">
      <Header />
      <Buttons />
      <Footer />
      
    </div>
  );
}

export default Rover;
