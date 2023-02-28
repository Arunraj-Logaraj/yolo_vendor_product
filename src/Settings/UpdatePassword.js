import React, { useState, useEffect } from "react";
import lock from "../images/Group (1).png";
import lockEye from "../images/Group (2).png";
// import addIcon from "./images/icons/add.svg";
// import { useNavigate } from "react-router-dom";
// import Layout from "./Layout";
// import filter from "./images/icons/filter.svg";
// import product from "./images/product.png";
// import option from "./images/icons/option.svg";
// import { GetVenderProductById } from "./api/gerProductList";

export const UpdatePassword = (props) => {
  const [productlist, setProductList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");

  let vendor_id = "2";

  //   useEffect(() => {
  //     if (vendor_id) {
  //       GetProductList(vendor_id);
  //     }
  //   }, []);

  //   const GetProductList = async (vendor_id) => {
  //     let res = await GetVenderProductById(vendor_id);
  //     if (res && res?.data) {
  //       setProductList(res?.data);
  //       setFilterData(res?.data);
  //     }
  //   };

  //   const handleSearch = (e) => {
  //     const getSearch = e.target.value;

  //     if (getSearch.length > 0) {
  //       const searchData = productlist.filter((item) =>
  //         item.product_name.toLowerCase().includes(getSearch.toLowerCase())
  //       );
  //       setProductList(searchData);
  //     } else {
  //       setProductList(filterData);
  //     }
  //     setQuery(getSearch);
  //   };

  return (
    <div className="popup-2">
      <div className="popup-inner-2">
        <button
          className="button-createsale-2"
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        <div className="container-fluid pop-up-parent">
          <h1 className="page-title  text-center text-md-center">
            Set / Reset Password
          </h1>
          <div className="section-data">
            <div className="row-2">
              <div className="col-lg-12 ml-auto">
                <label htmlFor="">Enter New Password</label>
                <div className="d-flex align-items-center mb-3">
                  <div className="input-icons">
                    <img src={lock} alt="lock" className="icon" />
                    <input
                      type="password"
                      placeholder="search"
                      className="input-field"
                    />
                    <img src={lockEye} alt="lockEye" className="iconEye" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row-2">
              <div className="col-lg-12  ml-auto">
                <label htmlFor="">Confirm New Password</label>
                <div className="d-flex align-items-center mb-3">
                  <div className="input-icons">
                    <img src={lock} alt="lock" className="icon" />
                    <input
                      type="password"
                      placeholder="search"
                      className="input-field"
                    />
                    <img src={lockEye} alt="lockEye" className="iconEye" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="updateClose">Close</button>
          <button className="updateSave">Save</button>
        </div>
      </div>
    </div>
  );
};
