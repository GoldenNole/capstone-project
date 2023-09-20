import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DisplayCartItem from "./DisplayCartItem";
const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const getCart = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/carts/5`);
                const result = await response.json();
                setCart(result.products);
            } catch (error) {
                console.log(error);
            }
        }
       
        getCart();
    }, []);

    return(
        <div>
            <h1> Cart </h1>
            <div>
            {cart.map((item) => (
                <div key={item.productId} className='items-container'>
                <DisplayCartItem itemId = {item.productId} />
                </div>
          ))}
            </div>
            <button>Checkout</button>
            <button>Continue Shopping</button>
        </div>
    )

}

export default Cart;