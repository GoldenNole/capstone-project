import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("TOKEN", token);

  const login = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "johnd",
            password: "m38rmF$"
        })
      });
      const result = await response.json();
      console.log("token", result.token);
      localStorage.setItem("token", result.token);
      navigate("/");

    } catch (err) {
      console.error(err);
    }
  };

  
  return (
    <>
      <div>
            <label>Login
                <input type="text" placeholder="login" />
            </label>
            <label>Password
                <input type="text" placeholder="password" />
            </label>
            <button onClick={login}>Login</button>
        </div>
    </>
  );
};
export default Login;