import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';

const Homepage = (props) => {
    const [items, setItems] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const token = localStorage.getItem("token");
    console.log("TOKEN", token);

    useEffect(() => {
      const getAllItmes = async () => {
        try{
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setItems(result);
        } catch (error) {
          console.log(error);
        }
      }
      getAllItmes();
    }, []);

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


    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };

    const itemMatches = (item, searchTerm) => {
      const { title } = item;
      const lowerCaseTerm = searchTerm.toLowerCase();
      return (
        title.toLowerCase().includes(lowerCaseTerm)
      );
    };
    
  
    const filteredItems = items.filter((item) => itemMatches(item, searchTerm));
    const itemsToDisplay = searchTerm.length ? filteredItems : items;
  
    return (
      <>
      <div>
      <h2>Search</h2>
        <input
          type="search"
          placeholder="Search for an item"
          onChange={handleChange}
        />
      </div>
      <div className="sort-container">
      <button className="btn" onClick={() => navigate(`/category/electronics`)}> View Electronics</button><br />
      <button className="btn" onClick={() => navigate(`/category/jewelery`)}> View jewelery</button><br />
      <button className="btn" onClick={() => navigate(`/category/men's clothing`)}> View Men clothing</button><br />
      <button className="btn" onClick={() => navigate(`/category/women's clothing`)}> View Women clothing</button>
        </div>
        <div>
          {itemsToDisplay.map((item) => (
            <div key={item.id} className='items-container'>
              <h3>{item.title}</h3>
              <h5>{item.price}</h5>
              <img src={item.image} alt={item.title} />
              <br />
              <button className="btn" onClick={() => navigate(`/${item.id}`)}> View Item</button>
              <button className="btn" onClick={() => addToCart(item, item.id)}>Add to cart</button>
            </div>
          ))}
        </div>
      </>
    )
  }

  export default Homepage;