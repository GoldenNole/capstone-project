import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import AddToCart from "./AddToCartButton";

const Homepage = (props) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getAllItmes() {
      const { data } = await props.supabase.from("products").select();
      setItems(data);
    }
    getAllItmes();
  }, []);

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
    <div className="bg-white">
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
        <button className="btn" onClick={() => navigate(`/category/icons`)}> ICONS</button><br />
        <button className="btn" onClick={() => navigate(`/category/city`)}> CITY</button><br />
        <button className="btn" onClick={() => navigate(`/category/friends`)}> FRIENDS</button><br />
        <button className="btn" onClick={() => navigate(`/category/ideals`)}> IDEALS</button>
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

      <div className="flex flex-wrap justify-evenly gap-y-20">
        {itemsToDisplay.map((item) => (
          <div key={item.id} className="w-full max-w-sm  border rounded-lg shadow bg-white flex flex-col justify-between shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
            <div className="cursor-pointer flex justify-center" onClick={() => navigate(`/${item.id}`)}>
              <img className="p-8  rounded-t-lg object-fill h-64 w-64" src={item.image} alt={item.title} />
            </div>
            <div className="px-5 pb-5">
              <div className="cursor-pointer" onClick={() => navigate(`/${item.id}`)}>
                <h5 className="text-xl font-semibold tracking-tight text-black cursor-pointer">{item.title}</h5>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-black">${item.price}</span>
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