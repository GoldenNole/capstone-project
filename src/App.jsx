import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Homepage from './components/Homepage';
import Login from './components/Login';
import DisplayItem from "./components/DisplayItem";
import DisplayCategory from "./components/DisplayCategory";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useState} from 'react';
import SignUp from "./components/SignUp";

function App() {
  const [cart, setCart] = useState([]);
 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage cart={cart} setCart={setCart} />} />
        <Route path="/:itemId" element={<DisplayItem cart={cart} setCart={setCart} />} />
        <Route path="/category/:category" element={<DisplayCategory/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
