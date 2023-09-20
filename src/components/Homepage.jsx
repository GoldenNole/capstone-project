import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';

const Homepage = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const url = "https://lvldflhdnklytnrutmnq.supabase.co/rest/v1/products"; // Replace with the actual API URL
    const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2bGRmbGhkbmtseXRucnV0bW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3MTg1NjAsImV4cCI6MjAxMDI5NDU2MH0.WYAh-n2b9_e-VtalxjoXdWeRp4KjiCt7N23xNGA0xDA";
    const token = localStorage.getItem("token");
    console.log("TOKEN", token);
// Create an object for the headers with the API key
    const headers = {
      'apikey': apiKey
    };
  
    useEffect(() => {
      const getAllItmes = async () => {
        try{
        const response = await fetch(url, {
          method: 'GET',
          headers: headers
        })
        
        const result = await response.json();
        console.log(result);
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
          {itemsToDisplay .map((item) => (
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