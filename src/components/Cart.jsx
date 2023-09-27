import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DisplayCartItem from "./DisplayCartItem";

const Cart = (props) => {
  const navigate = useNavigate();
  const cart = props.cart;


  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    props.setTotal(total);
  }, [cart]);

  // clear cart
  const clearCart = () => {
    props.setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
        {props.total !== 0 && (
        <button onClick={() => navigate(`/checkout`)} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Checkout
        </button>
        )}
      </div>
      <div>
        {cart.length === 0 && <div className="container"><h2>Your Cart is Empty!</h2></div>}
        {cart &&
          cart.map((item) => (
            <div key={item.id} className="mt-8">
              <DisplayCartItem item={item} cart={cart} setCart={props.setCart} />
            </div>
          ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <button onClick={clearCart}>Clear Cart</button>
        <div>
        <span className="text-gray-600 mr-4">Subtotal:</span>
        <span className="text-xl font-bold">${props.total.toFixed(2)}</span>
        </div>
    </div>
    </div>
  )

}

export default Cart;