import React, { Fragment, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../../Store/CartSlice";
import { useNavigate } from "react-router-dom";
import {CiSearch} from 'react-icons/ci'
import Footer from "../Footer/Footer"
const Product = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [restart, setrestart] = useState(false);
  const navigate = useNavigate();

  function searchByTitle(searchTerm) {
    if (searchTerm !== "") {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const FilterArray = data.filter((item) => {
        const lowerCaseTitle = item.title.toLowerCase();
        return lowerCaseTitle.includes(lowerCaseSearchTerm);
      });
      setData(FilterArray);
    } else {
      setrestart(!restart);
    }
  }

  useEffect(() => {
    axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      setData(response.data);
      setLoading(false); // Set loading to false when data is fetched
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false); 
    });
}, [restart]);

  function truncateString(length, inputString) {
    if (inputString.length <= length) {
      return inputString;
    } else {
      return inputString.slice(0, length) + "...";
    }
  }

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  const userData = data?.map((item) => {
    return (
      <div className="productlist" key={item.id} onDoubleClick={() => {
        navigate("/product-detail", { state: item });
      }}>
        <img src={item.image} alt="img" />
        <h1>{truncateString(20, item.title)}</h1>
        <p ><span className="prd">Price:</span> {item.price}&#8377;</p>
      <div className="flexcolumn">
        <button className="button" onClick={() => handleAdd(item)}>
          Add to Cart
        </button>
      </div>
      </div>
    );
  });

  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search Shopy" onChange={(e) => searchByTitle(e.target.value)} />
            <div className="search-icon">
              <CiSearch />
            </div>
          </div>
          {loading ? ( 
            <div className="loader"></div>
          ) : (
            <div className="userdata">{userData}
            <Footer/>
            </div>
            
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Product;
