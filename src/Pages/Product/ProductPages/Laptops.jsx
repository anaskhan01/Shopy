import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../../../Store/CartSlice";
import { useNavigate } from "react-router-dom";
import { CiSearch } from 'react-icons/ci';
import Footer from "../../Footer/Footer"
const Laptops = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://mobile-api-ycjb.onrender.com/Laptops")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (search !== "") {
      const lowerCaseSearchTerm = search.toLowerCase();
      const FilterArray = data.filter((item) => {
        const lowerCaseTitle = item.title.toLowerCase();
        return lowerCaseTitle.includes(lowerCaseSearchTerm);
      });
      setFilteredData(FilterArray);
    } else {
      setFilteredData(data);
    }
  }, [search, data]);

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section>
    <div className="container">
      <div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search Shopy"
            onChange={handleSearchChange}
          />
          <div className="search-icon">
            <CiSearch />
          </div>
        </div>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <div className="userdata">
            {filteredData.map((item) => (
              <div className="productlist" key={item.id} onDoubleClick={() => {
                navigate("/product-detail", { state: item });
              }}>
                <img src={item.image} alt="" />
                <h1>{item.title}</h1>
                <p><span className="prd">Price: </span> {item.price}</p>
                <div className="flexcolumn">
                  <button className="button" onClick={() => handleAdd(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
             <Footer/>
          </div>
        )}
      </div>
    </div>
  </section>
  );
};

export default Laptops;
