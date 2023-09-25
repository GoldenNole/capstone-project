import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const DisplayItem = () => {
    const [item, setItem] = useState([]);
    const { itemId } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      const getItem = async () => {
        try{
        const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
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
              <br />
              <button className="btn" onClick={() => navigate(`/`)}>Home</button>
        </div>
      </>
    )
  }

  export default DisplayItem;