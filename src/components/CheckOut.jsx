import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreatePostForm = (props) => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const navigate = useNavigate();

  async function handleCreatePost(e) {
    e.preventDefault();
    alert("Order Created! Thank you for shopping with BrickMania!");
    props.setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
    navigate("/");
  }

  return (
    <div>
      <div className="container mx-auto bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Checkout</h1>
            <p className="text-2xl font-semibold text-gray-900"> Total due today: ${props.total.toFixed(2)}</p>
          </div>
          <div className="mt-5">
            <form className="flex mt-8" onSubmit={handleCreatePost}>
            <div className="w-full max-w-lg mx-auto p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-lg font-medium mb-6">Shipping Address</h2>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2"> First Name:
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={fName}
                      type="text"
                      name="fname"
                      placeholder="First Name"
                      onChange={(e) => setfName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2"> Last Name:
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={lName}
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                      onChange={(e) => setlName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2"> Street:
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={street}
                      type="text"
                      name="street"
                      placeholder="street"
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2"> City:
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={city}
                      type="text"
                      name="city"
                      placeholder="city"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2"> State:
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={state}
                      type="text"
                      name="state"
                      placeholder="state"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2"> Zip:
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={zip}
                      type="text"
                      name="zip"
                      placeholder="zip"
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>
              
              <div className="w-full max-w-lg mx-auto p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-lg font-medium mb-6">Payment Information</h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number
                        <input
                          value={cardNumber}
                          type="text"
                          name="card-number"
                          placeholder="0000 0000 0000 0000"
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                      </label>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiration Date
                        <input
                          value={expDate}
                          type="text"
                          name="expiration-date"
                          placeholder="MM / YY"
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                      </label>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV
                        <input
                          value={cvv}
                          type="text"
                          name="cvv"
                          placeholder="000"
                          onChange={(e) => setCvv(e.target.value)}
                          className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                      </label>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Holder
                        <input
                          value={cardHolder}
                          type="text"
                          name="card-holder"
                          placeholder="Full Name"
                          onChange={(e) => setCardHolder(e.target.value)}
                          className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                      </label>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button type="submit" className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostForm;

