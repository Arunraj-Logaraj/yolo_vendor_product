import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import option from "../images/icons/option.svg";
import { GetVenderProductById } from "../api/gerProductList";

export const RoleSetting = (props) => {
  const [productlist, setProductList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");
  const [query1, setQuery1] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);
  // const [productlist, setProductList1] = useState([]);
  const [filterData1, setFilterData1] = useState([]);

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
      setFilterData1(res?.data);
    }
  };

  const handleSearch = (e) => {
    const getSearch = e.target.value;

    if (getSearch.length > 0) {
      const searchData = productlist.filter((item) =>
        item.product_name.toLowerCase().includes(getSearch.toLowerCase())
      );
      setProductList(searchData);
    } else {
      setProductList(filterData1);
    }
    setQuery1(getSearch);
  };

  return (
    <div className="container-fluid popup-3 ">
      <div className="popup-inner-4">
        <h1 className="page-title  text-center text-md-left">Roles </h1>
        <div className="mb-4 text-center text-md-left">Manage Roles</div>
        <button
          className="button-createsale"
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        <div className="section-data ">
          <div className="row">
            <div className="col-lg-3 ml-auto">
              <div className="d-flex align-items-center mb-3">
                <input
                  type="text"
                  placeholder="search"
                  className="form-control mr-1"
                  value={query1}
                  onChange={(e) => handleSearch(e)}
                />
                {/* <a
                  className="filter-wrap"
                  href
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <img src={filter} alt="" />
                </a> */}
              </div>
            </div>
          </div>
          <p />
          <div className="collapse" id="collapseExample">
            <div className="filter-search">
              <input
                type="text"
                placeholder="search"
                className="form-control mr-1 ml-auto"
              />
              <input
                type="text"
                placeholder="search"
                className="form-control mr-1"
              />
              <input
                type="text"
                placeholder="search"
                className="form-control mr-1"
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr role="row">
                  <th>Role</th>
                  <th>Reporting To</th>
                  <th>Total Users</th>
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
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* <a
            href
            className="product-add-link"
            onClick={() => setButtonPopup(true)}
          >
            <img src={addIcon} alt="" />
            <div className="product-add-link-text">Add</div>
          </a> */}
          {/* <CreateSaleOrder trigger={buttonPopup} setTrigger={setButtonPopup} /> */}
        </div>
      </div>
    </div>
  );
};
