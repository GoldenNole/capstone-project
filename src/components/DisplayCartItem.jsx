import React, { useState, useEffect } from "react";

const DisplayCartItem = (props) => {
    const [item, setItem] = useState([]);
  
    useEffect(() => {
      const getItem = async () => {
        console.log("itemID", props.itemId)
        try{
        const response = await fetch(`https://fakestoreapi.com/products/${props.itemId}`);
        const result = await response.json();
        console.log(result);
        setItem(result);
        } catch (error) {
          console.log(error);
        }
      }
      getItem();
    }, []);
  
  
    return (
      <>
        <div>
              <h3>{item.title}</h3>
              <h5>{item.price}</h5>
              <p>{item.description}</p>
              <img src={item.image} alt={item.title} />
              <button>Remove from Cart</button>
              <button>Add Item</button>
              <br />
        </div>
      </>
    )
  }

  export default DisplayCartItem;