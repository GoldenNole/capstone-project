import React, { useState, useEffect } from "react";
import DecreaseButton from "./DecreaseButton";
import IncreaseButton from "./IncreaseButton";

const DisplayCartItem = (props) => {
  const item = props.item;

  return (
    <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
      <div className="flex-shrink-0">
        <img src={item.image} alt={item.title} className="w-32 h-32 object-cover" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <h2 className="text-lg font-bold">{item.title}</h2>
        <p className="mt-2 text-gray-600">{item.description}</p>
        <div className="mt-4 flex items-center">
          <span className="mr-2 text-gray-600">Quantity:</span>
          <div className="flex items-center">
            <DecreaseButton cart={props.cart} setCart={props.setCart} item={item} />
            <span className="mx-2 text-gray-600">{item.amount}</span>
            <IncreaseButton cart={props.cart} setCart={props.setCart} item={item} />
          </div>
          <span className="ml-7 font-bold">${item.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}




export default DisplayCartItem;