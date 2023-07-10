import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={"containerNavbar"}>
        <Link to="/" className="title">Game Shop</Link>

        <ul className="categories">
          <Link to="/category/Xbox">Xbox</Link>
          <Link to="/category/Playstation">Playstation</Link>
          <Link to="/category/nintendo">Nintendo</Link>
        </ul>

        <CartWidget />
      </div>
     <Outlet />
    </div>
  );
};

export default Navbar;
