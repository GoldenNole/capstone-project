import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Homepage from './components/Homepage';
import Login from './components/Login';
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
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
