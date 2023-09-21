import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreatePostForm = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  async function handleCreatePost(e) {
    e.preventDefault();
    alert("Order Created!");
    navigate("/");
  }

  return (
    <div className="create-container">
      <h1> Add New Post </h1>
      <form onSubmit={handleCreatePost}>
        <label> First Name: 
        <input
          value={fName}
          type="text"
          name="fname"
          placeholder="First Name"
          onChange={(e) => setfName(e.target.value)}
        />
        </label>
        <br></br>

        <label> Last Name:: 
        <input
          value={lName}
          type="text"
          name="lname"
          placeholder="Last Name"
          onChange={(e) => setlName(e.target.value)}
        />
        </label>
        <br></br>

        <label> Street:  
        <input
          value={street}
          type="text"
          name="street"
          placeholder="street"
          onChange={(e) => setStreet(e.target.value)}
        />
        </label>
        <br></br>

        <label> City:
        <input
          value={city}
          type="text"
          name="city"
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br></br>

        <label> State:
        <input
          value={state}
          type="text"
          name="state"
          placeholder="state"
          onChange={(e) => setState(e.target.value)}
            />
        </label>
        <br></br>
        
        <label> Zip:
        <input
          value={zip}
          type="text"
          name="zip"
          placeholder="zip"
          onChange={(e) => setZip(e.target.value)}
            />
        </label>
        <br></br>

        <label> Card Number:
        <input
          value={cardNumber}
          type="text"
          name="cardNumber"
          placeholder="cardNumber"
          onChange={(e) => setCardNumber(e.target.value)}
            />
        </label>
        <br></br>
        
        <label> Expiration Month:
        <input
          value={expMonth}
          type="text"
          name="expMonth"
          placeholder="expMonth"
          onChange={(e) => setExpMonth(e.target.value)}
            />
        </label>
        <br></br>

        <label> Expiration Year:
        <input
          value={expYear}
          type="text"
          name="expYear"
          placeholder="expYear"
          onChange={(e) => setExpYear(e.target.value)}
            />
        </label>
        <br></br>

        <label> CVV:
        <input
          value={cvv}
          type="text"
          name="cvv"
          placeholder="cvv"
          onChange={(e) => setCvv(e.target.value)}
            />
        </label>
        <br></br>
        <button className="btn">Submit</button>
      </form>
      
      <button className="btn" onClick={() => navigate(`/`)} >Return Home</button>
    </div>
  );
};

export default CreatePostForm;