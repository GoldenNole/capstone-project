import React, { useState, useEffect } from "react";
import DecreaseButton from "./DecreaseButton";
import IncreaseButton from "./IncreaseButton";

const DisplayCartItem = (props) => {
    const item = props.item;

  const removeFromCart = (id) => {
    const newCart = props.cart.filter((item) => {
      return item.id !== id;
    });
    props.setCart(newCart);
  };
    return (
      <>
        <div>
              <h3>{item.title}</h3>
              <h5>{item.price}</h5>
              <img src={item.image} alt={item.title} />
              <h5>Amount: {item.amount}</h5>
              <button className="btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              <IncreaseButton cart={props.cart} setCart={props.setCart} item={item} />
              <DecreaseButton cart={props.cart} setCart={props.setCart} item={item} />
              <br />
        </div>
      </>
    )
  }

  export default DisplayCartItem;