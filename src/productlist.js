import "./App.css";
import addIcon from "./images/icons/add.svg";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import filter from "./images/icons/filter.svg";
import product from "./images/product.png";
import option from "./images/icons/option.svg";
import { GetVenderProductById } from "./api/gerProductList";
import { useEffect, useState } from "react";

const ProductList = () => {
  const navigate = useNavigate();

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

  return (
    <Layout>
      <div className="container-fluid">
        <h1 className="page-title text-center text-md-left">Product List</h1>
        <div className="mb-4 text-center text-md-left">Manage Products</div>
        <div className="section-data">
          <div className="row">
            <div className="col-lg-3 ml-auto">
              <div className="d-flex align-items-center mb-3">
                <input
                  type="text"
                  placeholder="search"
                  className="form-control mr-1"
                  value={query}
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
                  <th>Product Name</th>
                  <th>Unit</th>
                  <th>Available Stocks</th>
                  <th>Price Per Unit</th>
                  <th>Status</th>
                  <th>Actions</th>
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
                            <img src={option} alt="" />
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
            onClick={() => {
              navigate("/addproduct");
            }}
          >
            <img src={addIcon} alt="" />
            <div className="product-add-link-text">Add</div>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;
