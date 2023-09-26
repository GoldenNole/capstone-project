import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Homepage from './components/Homepage';
import Login from './components/Login';
import DisplayItem from "./components/DisplayItem";
import DisplayCategory from "./components/DisplayCategory";
import Header from "./components/Header";
import Cart from "./components/Cart";
import {useState, useEffect} from 'react';
import SignUp from "./components/SignUp";
import Checkout from "./components/CheckOut";

function App() {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState("")

  useEffect(() => {
    const data = localStorage.getItem("token");
    if ( data !== null ) setToken(data);
  }, []);
 
  return (
    <div className="App">
      <Header token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Homepage cart={cart} setCart={setCart} />} />
        <Route path="/:itemId" element={<DisplayItem cart={cart} setCart={setCart} />} />
        <Route path="/category/:category" element={<DisplayCategory/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login token={token} setToken={setToken}/>} />
        <Route path="/register" element={<SignUp token={token} setToken={setToken} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
