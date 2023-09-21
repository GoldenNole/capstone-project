import React, { useState, useEffect } from "react";

const DisplayCartItem = (props) => {
    const item = props.item;
    return (
      <>
        <div>
              <h3>{item.title}</h3>
              <h5>{item.price}</h5>
              <img src={item.image} alt={item.title} />
              <h5>Amount: {item.amount}</h5>
              <button>Remove from Cart</button>
              <button>Add Item</button>
              <br />
        </div>
      </>
    )
  }

  export default DisplayCartItem;