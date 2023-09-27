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
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("token");
    console.log("token", data)
    if (data) setToken(data);
  }, []);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    console.log("cart data", cartData)
    if (cartData) setCart(cartData);
  }, []);

  // useEffect(() => {
  //   console.log("Cart Updated", cart)
  //   localStorage.setItem('cart', JSON.stringify(cart));
  //   const data = JSON.parse(localStorage.getItem('cart'));
  //   console.log("cart data", data)
  // }, [cart]);
 
  return (
    <div className="App">
      <Header token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Homepage token={token} cart={cart} setCart={setCart} />} />
        <Route path="/:itemId" element={<DisplayItem token={token} cart={cart} setCart={setCart} />} />
        <Route path="/category/:category" element={<DisplayCategory token={token} cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} total={total} setTotal={setTotal}  />} />
        <Route path="/login" element={<Login token={token} setToken={setToken}/>} />
        <Route path="/register" element={<SignUp token={token} setToken={setToken} />} />
        <Route path="/checkout" element={<Checkout total={total} setCart={setCart} />} />
      </Routes>
    </div>
  )
}

export default App
