import Header from "./Header";
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';

const Homepage = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const getAllItmes = async () => {
        try{
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        console.log(result);
        setItems(result);
        } catch (error) {
          console.log(error);
        }
      }
      getAllItmes();
    }, []);
  
  
    return (
      <>
      <Header />
        <div>
          {items.map((item) => (
            <div key={item.id} className='items-container'>
              <h3>{item.title}</h3>
              <h5>{item.price}</h5>
              <img src={item.image} alt={item.title} />
              <br />
              <button className="btn" onClick={() => navigate(`/${item.id}`)}> View Item</button>
            </div>
          ))}
        </div>
      </>
    )
  }

  export default Homepage;