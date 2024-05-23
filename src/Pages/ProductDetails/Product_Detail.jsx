import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Productdetail.css";
import { useLocation } from "react-router-dom";
const Product_Detail = () => {
  const location = useLocation();
  console.log(location.state);
  const notify = () => toast("Order Placed Succesfully!");
  return (
    <section>
      <div className="container">
        <div className="productmain">
          <div className="pflex">
          <div className="left-image">
            <img src={location.state.image} alt="product" />
          </div>
          <div className=".product-content">
            <h1 className="productheading">{location.state.title}</h1>
            <p className="productdesc">{location.state.description}</p>
            <p><span className="prd">Price: </span> {location.state.price} &#8377;</p>
            <button className="button " role="button" onClick={notify}
            >Buy Product</button> 
             <ToastContainer />
          </div>
          </div>
        </div>
            </div>
    </section>
  );
};

export default Product_Detail;
