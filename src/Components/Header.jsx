import { Link, useNavigate } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";

import "./Header.css";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const nav = useNavigate();

  return (
    <Fragment>
      <header id="header">
        <div className="container">
          <div className="header">
            <nav>
              <ul className="menu">
                <li>
                  <Link style={{ color: "#805aed" }} to={"/"}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to={"/product"}>
                    PRODUCTS <RiArrowDownSFill />
                  </Link>
                  <div className="submenu">
                  <ul>
                    <li>
                      <Link to={"/mobile"}>MOBILE</Link>
                    </li>
                    <li>
                      <Link to={"/laptops"}>LAPTOP</Link>
                    </li>
                    <li>
                      <Link to={"/fashion"}>FASHION</Link>
                    </li>
                  </ul>
                  </div>
                </li>
              </ul>
            </nav>

            <div className="logo">
              <span onClick={() => nav("/")}>SHOPY</span>
            </div>

            <button className="btnwishlist" onClick={() => nav("/addcart")}>
              <BiCartAlt color="#805aed" size={30} />
              <span>{cart.length}</span>
            </button>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
