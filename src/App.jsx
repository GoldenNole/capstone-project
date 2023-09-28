import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Homepage from './components/Homepage';
import Login from './components/Login';
import DisplayItem from "./components/DisplayItem";
import DisplayCategory from "./components/DisplayCategory";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useState, useEffect } from 'react';
import SignUp from "./components/SignUp";
import Checkout from "./components/CheckOut";
import { createClient } from '@supabase/supabase-js'

function App() {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState("")
  const [total, setTotal] = useState(0);

  const supabaseUrl = 'https://lvldflhdnklytnrutmnq.supabase.co'
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2bGRmbGhkbmtseXRucnV0bW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3MTg1NjAsImV4cCI6MjAxMDI5NDU2MH0.WYAh-n2b9_e-VtalxjoXdWeRp4KjiCt7N23xNGA0xDA"
  const supabase = createClient(supabaseUrl, supabaseKey)

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

  return (
    <div>
      <Header token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Homepage token={token} cart={cart} setCart={setCart} supabase={supabase} />} />
        <Route path="/:itemId" element={<DisplayItem token={token} cart={cart} setCart={setCart} supabase={supabase} />} />
        <Route path="/category/:category" element={<DisplayCategory token={token} cart={cart} setCart={setCart} supabase={supabase} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} total={total} setTotal={setTotal} />} />
        <Route path="/login" element={<Login token={token} setToken={setToken} />} />
        <Route path="/register" element={<SignUp token={token} setToken={setToken} />} />
        <Route path="/checkout" element={<Checkout total={total} setCart={setCart} />} />
      </Routes>
    </div>
  )
}

export default App
