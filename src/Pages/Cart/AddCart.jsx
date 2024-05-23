import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, increaseQuantity, decreaseQuantity } from "../../Store/CartSlice";
import cartimage from "../Cart/cartimg.jpg";
import { useNavigate } from "react-router-dom";
import "./AddCart.css"
const AddCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };
  function truncateString(length, inputString) {
    if (inputString.length <= length) {
      return inputString;
    } else {
      return inputString.slice(0, length) + "...";
    }
  }
  const userdata =
    products.length === 0 ? (
      <div className="container">
        <div className="cartmain">
          <img className="cartimg mt" src={cartimage} alt="img" />
          <p style={{ textAlign: "center" }}>Missing Cart items?</p>
          <p style={{ textAlign: "center" }}> Add Items to your cart</p>
          <div
            className="cartflex"
          >
            <button onClick={() => navigate("/")} className="button">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    ) : (
      products.map((product) => (
        <div className="productlist" key={product.id}>
          <img src={product.image} alt="" />
          <br />
          <h1>{truncateString(20, product.title)}</h1>
          <p>
            <span className="prd">Price: </span>
            {product.price}&#36;
          </p>
          <p>
            <span className="prd">Quantity: </span>
            <button className="square-button" onClick={() => handleDecreaseQuantity(product.id)}>-</button>
            <span style={{fontSize: "1.2rem"}}>{product.quantity}</span>
            <button className="square-button" onClick={() => handleIncreaseQuantity(product.id)}>+</button>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="flexcolumn">
              <button className="button">Buy Now</button>

              <button
                className="button"
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))
    );

  return (
    <div>
      <div className="userdata">{userdata}</div>
    </div>
  );
};

export default AddCart;
