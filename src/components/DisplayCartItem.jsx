import React, { useState, useEffect } from "react";

const DisplayCartItem = (props) => {
    const item = props.item;
      // remove from cart

  const removeFromCart = (id) => {
    const newCart = props.cart.filter((item) => {
      return item.id !== id;
    });
    props.setCart(newCart);
  };

    // increase amount
    const increaseAmount = (id) => {
      const cartItem = props.cart.find((item) => item.id === id);
      addToCart(cartItem, id);
    };

    const addToCart = (product, id) => {
      console.log("product", product);
      const newItem = { ...product, amount: 1 };
      console.log("newItem", newItem);
      // check if the item is already in the cart
      const cartItem = props.cart.find((item) => {
        return item.id === id;
      });
      // if cart item is already in the cart
      if (cartItem) {
        const newCart = [...props.cart].map((item) => {
          if (item.id === id) {
            return { ...item, amount: cartItem.amount + 1 };
          } else {
            return item;
          }
        });
        props.setCart(newCart);
        console.log("Cart", props.cart);
      } else {
        props.setCart([...props.cart, newItem]);
        console.log("Cart", props.cart);
      }
    };

    // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = props.cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = props.cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      props.setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

    return (
      <>
        <div>
              <h3>{item.title}</h3>
              <h5>{item.price}</h5>
              <img src={item.image} alt={item.title} />
              <h5>Amount: {item.amount}</h5>
              <button className="btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              <button className="btn" onClick={() => increaseAmount(item.id)}>+</button>
              <button className="btn" onClick={() => decreaseAmount(item.id)}>-</button>
              <br />
        </div>
      </>
    )
  }

  export default DisplayCartItem;