import React, { useState, useEffect } from "react";
import addIcon from "./images/icons/add.svg";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import filter from "./images/icons/filter.svg";
import product from "./images/product.png";
import option from "./images/icons/option.svg";
import { GetVenderProductById } from "./api/gerProductList";
import { AddOrder } from "./api/addProduct";

export const CreateSaleOrder = (props) => {
  const [productlist, setProductList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");

  let vendor_id = "2";

  useEffect(() => {
    if (vendor_id) {
      GetProductList(vendor_id);
    }
  }, []);

  const GetProductList = async (vendor_id) => {
    let res = await GetVenderProductById(vendor_id);
    if (res && res?.data) {
      setProductList(res?.data);
      setFilterData(res?.data);
    }
    // const res1 = AddRoles(res);
    // if (res1) {
    //   alert("Added Successfully");
    // }
  };

  const handleSearch = (e) => {
    const getSearch = e.target.value;

    if (getSearch.length > 0) {
      const searchData = productlist.filter((item) =>
        item.product_name.toLowerCase().includes(getSearch.toLowerCase())
      );
      setProductList(searchData);
    } else {
      setProductList(filterData);
    }
    setQuery(getSearch);
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="button-createsale"
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        <div className="container-fluid pop-up-parent">
          <h1 className="page-title  text-center text-md-left">
            Create Sales Order
          </h1>
          <div className="section-data">
            <div className="row">
              <div className="col-lg-12 ml-auto">
                <div className="d-flex align-items-center mb-3">
                  <input
                    type="text"
                    placeholder="search"
                    className="form-control mr-1"
                  />
                </div>
              </div>
            </div>
            <p></p>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr role="row">
                    <th>Product Name</th>
                    <th>Price Per unit</th>
                    <th>Avl. Stock</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {productlist?.map((ele) => {
                    return (
                      <tr>
                        <td className="productimgname">
                          <a href className="product-img">
                            <img src={product} alt="" />
                          </a>
                          <a className="product-name" href>
                            {ele?.product_id}
                          </a>
                        </td>
                        <td>₹{ele?.price}</td>
                        <td>{ele?.package_of_unit}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <button>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
