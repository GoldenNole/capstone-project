import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DisplayCartItem from "./DisplayCartItem";

const Cart = (props) => {
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const cart = props.cart;

     // clear cart
  const clearCart = () => {
    props.setCart([]);
  };
    
    console.log("cart", cart);
    return(
        <div>
            <h1> Cart </h1>
            <div>
            {cart.length === 0 && <div className="container"><h2>Your Cart is Empty!</h2></div>}
            {cart &&
            cart.map((item) => (
                console.log("item", item),
                <div key={item.id} className='items-container'>
                <DisplayCartItem item = {item} cart={cart} setCart={props.setCart} />
                </div>
          ))}
            </div>
            <h1>{total}</h1>
            <button className="btn" onClick={() => navigate(`/checkout`)}>Checkout</button>
            <button className="btn" onClick={() => navigate(`/`)}>Continue Shopping</button>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    )

}

export default Cart;