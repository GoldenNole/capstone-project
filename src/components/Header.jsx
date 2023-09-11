const Header = () => {

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
          console.log(result);
        } catch (err) {
          console.error(err);
        }
      };

    return (
        <header>My Online Shop
            <div>
            <label>Login
                <input type="text" placeholder="login" />
            </label>
            <label>Password
                <input type="text" placeholder="password" />
            </label>
            <button onClick={login}>Login</button>
            </div>
        </header>
    )
}
export default Header;