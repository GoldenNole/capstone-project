import { Link } from "react-router-dom";

const Header = (props) => {

  const handleClick = () => {
    localStorage.removeItem("token", props.token);
    props.setToken("")
  };

    return (
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-blue-800 shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <Link to="/" className="text-2xl no-underline text-yellow-300 hover:text-blue-dark">BrickMania</Link>
      </div>
          {!props.token && (
            <div>
          <Link className="text-lg no-underline text-yellow-300 hover:text-blue-dark ml-2" to="/">HOME</Link>
          <Link className="text-lg no-underline text-yellow-300 hover:text-blue-dark ml-2" to="/login">LOGIN</Link>
          <Link className="text-lg no-underline text-yellow-300 hover:text-blue-dark ml-2" to="/register">SIGN UP</Link>
          </div>
      )}
      {props.token && (
        <div>
          <Link className="text-lg no-underline text-yellow-300 hover:text-blue-dark ml-2" to="/">HOME</Link>
          <Link className="text-lg no-underline text-yellow-300 hover:text-blue-dark ml-2" to="/cart">CART</Link>
          <Link className="text-lg no-underline text-yellow-300 hover:text-blue-dark ml-2" to="/login" onClick={handleClick}>
            LOGOUT
          </Link>
        </div>
      )}

        </nav>
    )
}
export default Header;