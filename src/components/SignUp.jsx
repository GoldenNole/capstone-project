import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../API/main";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.length < 6) {
      alert("Your username must be at minimum 6 characters in length");
    } else if (password.length < 8) {
      alert("Your password must be at minimum 8 characters in length");
    } else {
      try {
        const result = await registerUser(username, password);
        localStorage.setItem("token", result.data.token);
        props.setToken(localStorage.getItem("token"));
        navigate("/");
      } catch (error) {
        alert("User already exists, please login instead!");
      }
    }
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Welcome to my Shop!</h1>
            <p className="mt-2 text-gray-500">Sign up below to create your account</p>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit}>

            <div className="relative mt-6">
              <label value={username} onChange={(e) => setUsername(e.target.value)}>
                Username: <input />
              </label>

              </div>
              <div className="relative mt-6">
              <label value={password} onChange={(e) => setPassword(e.target.value)}>
                Password: <input />
              </label>
              </div>
              <div className="my-6">
              <button className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none ">Register</button>
              </div>
              <p className="text-center text-sm text-gray-500">Already have an account yet? 
                    <a href="/login"
                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"> Sign
                        in
                    </a>.
                </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;