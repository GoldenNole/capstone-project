import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");

  const handleClick = () => {
    localStorage.removeItem("token", token);
  };

    return (
        <header>My Online Shop
          {!token && (
        <nav>
          <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/register">SIGN UP</Link></li>
          </ul>
        </nav>
      )}
      {token && (
        <div>
          <nav>
          <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/cart">CART</Link></li>
          <li><Link to="/login" onClick={handleClick}>
            LOG OUT
          </Link></li>
          </ul>
          </nav>
        </div>
      )}

        </header>
    )
}
export default Header;