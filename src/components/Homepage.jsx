import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import AddToCart from "./AddToCartButton";

const Homepage = (props) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getAllItmes = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setItems(result);
      } catch (error) {
        console.log(error);
      }
    }
    getAllItmes();
  }, []);

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
    <div>
      <div className="relative mb-3 w-full max-w-sm grid place-items-center" >
        <h2>Search</h2>
        <input
          type="search"
          className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
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
          <div key={item.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="cursor-pointer" onClick={() => navigate(`/${item.id}`)}>
              <img className="p-8 rounded-t-lg" src={item.image} alt={item.title} />
            </div>
            <div className="px-5 pb-5">
              <div className="cursor-pointer" onClick={() => navigate(`/${item.id}`)}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white cursor-pointer">{item.title}</h5>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
                {props.token && <AddToCart cart={props.cart} setCart={props.setCart} item={item} />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Homepage;