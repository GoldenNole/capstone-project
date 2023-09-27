import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import AddToCart from "./AddToCartButton";

const DisplayCategory = (props) => {
  const [items, setItems] = useState([]);
  const [catSearchTerm, setCatSearchTerm] = useState("");
  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    const getAllItmes = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const result = await response.json();
        setItems(result);
      } catch (error) {
        console.log(error);
      }
    }
    getAllItmes();
  }, [navigate]);

  const handleChange = (e) => {
    setCatSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    console.log("Sort", e)
    if (e === "highPrice") {
      console.log("high to low")
      setItems([...items].sort((a, b) => (a.price < b.price) ? 1 : -1)) // high - low
    } else if (e === "lowPrice") {
      console.log("low to high")
      setItems([...items].sort((a, b) => (a.price > b.price) ? 1 : -1)) // low - high
    } else if (e === "aToZ") {
      console.log("A to Z")
      setItems([...items].sort((a, b) => (a.title > b.title) ? 1 : -1)) // A - Z
    } else if (e === "zToA") {
      console.log("Z to A")
      setItems([...items].sort((a, b) => (a.title < b.title) ? 1 : -1)) // Z - A
    }
  }

  const itemMatches = (item, searchTerm) => {
    const { title } = item;
    const lowerCaseTerm = searchTerm.toLowerCase();
    return (
      title.toLowerCase().includes(lowerCaseTerm)
    );
  };


  const filteredItems = items.filter((item) => itemMatches(item, catSearchTerm));
  const itemsToDisplay = catSearchTerm.length ? filteredItems : items;

  return (
    <>
      <div>
        <h2>{category}</h2>
        <div className="flex justify-evenly mx-auto m-8 bg-white pt-4 pb-4 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10  ">
          <div className="flex" >
            <h2 className="m-3">Search</h2>
            <input
              type="search"
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search for an item"
              onChange={handleChange}
            />
          </div>
          <button className="" onClick={() => navigate(`/category/electronics`)}> View Electronics</button>
          <button className="" onClick={() => navigate(`/category/jewelery`)}> View jewelery</button>
          <button className="" onClick={() => navigate(`/category/men's clothing`)}> View Men clothing</button>
          <button className="" onClick={() => navigate(`/category/women's clothing`)}> View Women clothing</button>
          <div className="flex m-2.5">
            <select onChange={(e) => handleSort(e.target.value)}>
              <option value="sort">Sort Products</option>
              <option value="highPrice">Price High to Low</option>
              <option value="lowPrice">Price Low to High</option>
              <option value="aToZ">Name A to Z </option>
              <option value="zToA">Name Z to A</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-y-20 ">
          {itemsToDisplay.map((item) => (
            <div key={item.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
              <div className="cursor-pointer" onClick={() => navigate(`/${item.id}`)}>
                <img className="p-8 rounded-t-lg object-scale-down h-64 w-96" src={item.image} alt={item.title} />
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
    </>
  )
}

export default DisplayCategory;