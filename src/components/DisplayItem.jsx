import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import DisplayItemCartButton from "./DisplayItemCartButton";

const DisplayItem = (props) => {
    const [item, setItem] = useState([]);
    const { itemId } = useParams();
    const navigate = useNavigate();

    const supabaseUrl = 'https://lvldflhdnklytnrutmnq.supabase.co'
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2bGRmbGhkbmtseXRucnV0bW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3MTg1NjAsImV4cCI6MjAxMDI5NDU2MH0.WYAh-n2b9_e-VtalxjoXdWeRp4KjiCt7N23xNGA0xDA"
    const supabase = createClient(supabaseUrl, supabaseKey)
  
    useEffect(() => {
        async function getItem() {
          const { data } = await supabase.from("products").select().eq("id", itemId);
          console.log("data", data)
          setItem(data[0]);
        }
        getItem();
      }, []);
  
    return (
      <div className="grid h-screen place-items-center">
      <div className="container mx-auto bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 ">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-white mb-4">
                    <img className="w-full h-full object-scale-down" src={item.image} alt={item.title}/>
                </div>
                <div className="flex -mx-2 mb-4">
                  
                    <div className="w-1/2 px-2">
                        {props.token && <DisplayItemCartButton cart={props.cart} setCart={props.setCart} item={item} />}
                        {!props.token && <button onClick={() => navigate(`/login`)} className="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">Login to Add to Cart</button>}
                    </div>
                    <div className="w-1/2 px-2">
                        <button onClick={() => navigate(`/`)} className="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">Return to Products</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700">Price:</span>
                        <span className="text-gray-600">${item.price}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700">Availability:</span>
                        <span className="text-gray-600">In Stock</span>
                    </div>
                </div>
                <div>
                    <span className="font-bold text-gray-700">Product Description:</span>
                    <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
  }

  export default DisplayItem;