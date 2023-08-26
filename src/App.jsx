import { useState, useEffect } from 'react';
import "./styles.css";

function App() {
  const [items, setItems] = useState([]);

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
    <header>My Online Shop
      <label>Login
      <input type="text" placeholder="login" />
      </label>
      <label>Password
      <input type="text" placeholder="password" />
      </label>
    </header>
      <div>
        {items.map((item) => (
          <div key={item.id} className='items-container'>
            <h3>{item.title}</h3>
            <h5>{item.price}</h5>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
          
      </div>
    </>
  )
}

export default App
