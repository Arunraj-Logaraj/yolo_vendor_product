import React from "react";
import addIcon from "./images/icons/add.svg";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import filter from "./images/icons/filter.svg";
// import product from "./images/product.png";
import option from "./images/icons/option.svg";
import { GetVenderProductById } from "./api/gerProductList";
import { useEffect, useState } from "react";
import { CreateSaleOrder } from "./CreateSaleOrder";

export const VendorsList = () => {
  const navigate = useNavigate();

  const [query1, setQuery1] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);
  const [productlist1, setProductList1] = useState([]);
  const [filterData1, setFilterData1] = useState([]);

  // if (buttonPopup) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

  let vendor_id = "2";
  console.log(vendor_id);

  useEffect(() => {
    if (vendor_id) {
      GetProductList(vendor_id);
    }
  }, []);

  const GetProductList = async (vendor_id) => {
    let res = await GetVenderProductById(vendor_id);
    if (res && res?.data) {
      setProductList1(res?.data);
      setFilterData1(res?.data);
    }
  };

  const handleSearch = (e) => {
    const getSearch = e.target.value;

    if (getSearch.length > 0) {
      const searchData = productlist1.filter((item) =>
        item.product_name.toLowerCase().includes(getSearch.toLowerCase())
      );
      setProductList1(searchData);
    } else {
      setProductList1(filterData1);
    }
    setQuery1(getSearch);
  };

  return (
    <Layout>
      <div className="container-fluid">
        <h1 className="page-title  text-center text-md-left">VendorsList</h1>
        <div className="mb-4 text-center text-md-left"> Manage Vendors</div>
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
                  <th>Vendor Name</th>
                  <th>Location</th>
                  <th>Category</th>
                  <th>Phone Number</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {productlist1?.map((ele) => {
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
                      <td>
                        {ele?.status === "Active" ? (
                          <div className="active">{ele?.status}</div>
                        ) : (
                          <div className="inactive">{ele?.status}</div>
                        )}
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle action-btn"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <img src={option} alt="option" />
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href>
                              View
                            </a>
                            <a className="dropdown-item" href>
                              Edit
                            </a>
                            <a className="dropdown-item" href>
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <a
            href
            className="product-add-link"
            onClick={() => setButtonPopup(true)}
          >
            <img src={addIcon} alt="addIcon" />
            <div className="product-add-link-text">Add</div>
          </a>
          <CreateSaleOrder trigger={buttonPopup} setTrigger={setButtonPopup} />
        </div>
      </div>
    </Layout>
  );
};
