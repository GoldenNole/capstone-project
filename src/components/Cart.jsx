import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DisplayCartItem from "./DisplayCartItem";

const Cart = (props) => {
    const [total, setTotal] = useState(0);
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
            {cart.map((item) => (
                console.log("item", item),
                <div key={item.id} className='items-container'>
                <DisplayCartItem item = {item} cart={cart} setCart={props.setCart} />
                </div>
          ))}
            </div>
            <h1>{total}</h1>
            <button>Checkout</button>
            <button>Continue Shopping</button>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    )

}

export default Cart;