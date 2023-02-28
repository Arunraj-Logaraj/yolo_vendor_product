import React, { useState, useEffect } from "react";

export const Permisson = (props) => {
  const [productlist, setProductList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");

  return (
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
                            {/* <img src={product} alt="" /> */}
                          </a>
                          <a className="product-name" href>
                            {ele?.product_name}
                          </a>
                        </td>
                        <td>{ele?.uom}</td>
                        <td>{ele?.package_of_unit}</td>
                        <td>₹{ele?.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
