import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Homepage from './components/Homepage';
import DisplayItem from "./components/DisplayItem";
import DisplayCategory from "./components/DisplayCategory";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:itemId" element={<DisplayItem />} />
        <Route path="/category/:category" element={<DisplayCategory/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
