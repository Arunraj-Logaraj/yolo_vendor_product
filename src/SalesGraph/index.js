import { Bar } from "react-chartjs-2";
import React from "react";
import Chart from "chart.js/auto";
import './style.css'; 
import "../App.css";
import { Grid, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import option from "../images/icons/option.svg";
import { GetVenderProductById,GetVendorDashboard } from "../api/gerProductList";
import product from "../images/product.png";
import { useNavigate } from 'react-router-dom';


const SalesGraph = () => {

  const navigate = useNavigate();
  React.useEffect(()=>{
    if(!localStorage.getItem('yolovendorLogin')){
      navigate('/')
    }
  },[])
  const [productlist, setProductList] = useState([]);
  const [dashboardCount, setDashboardCount] = useState([]);

  let vendor_id = "2";

  useEffect(() => {
    if (vendor_id) {
      GetProductList(vendor_id);
    }
  }, []);
  useEffect(() => {
    if (vendor_id) {
      getVendorDashboard(vendor_id)
    }
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const GetProductList = async (vendor_id) => {
    let res = await GetVenderProductById(vendor_id);
    if (res && res?.data) {
      setProductList(res?.data);
    }
  };
  const  getVendorDashboard = async (vendor_id) => {
    let res = await GetVendorDashboard(vendor_id);
    if (res && res?.data) {
      setDashboardCount(res?.data[0]);
      console.log('*****************************88888',res?.data)
    }
  };


  const labels = [
    "Jan",
    "Febr",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
         <div className="container-fluid pt-5">
          <div className="row align-items-stretch">
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Product<svg className="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                    </path>
                  </svg></h4><span className="hind-font caption-12 c-dashboardInfo__count">{dashboardCount.Total_products}</span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Orders<svg className="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                    </path>
                  </svg></h4><span className="hind-font caption-12 c-dashboardInfo__count">{dashboardCount.Total_orders}</span><span className="hind-font caption-12 c-dashboardInfo__subInfo"></span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Delivered<svg className="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                    </path>
                  </svg></h4><span className="hind-font caption-12 c-dashboardInfo__count">{dashboardCount.order_delivered}</span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Returned<svg className="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                    </path>
                  </svg></h4><span className="hind-font caption-12 c-dashboardInfo__count">{dashboardCount.order_canceled}</span>
              </div>
            </div>
          </div>
        
      </div>
      <div className="container-fluid pt-5">
        <div className="row">
<div className="col-lg-6">
      <Grid container justifyContent="space-between">
        <Grid>
          <h5>Sales Graph</h5>
        </Grid>
        <Grid>
          <span style={{paddingRight:"10px"}}>Show:</span>
          <Select value={"This week"}>
            <MenuItem value={"Last month"}>Last month</MenuItem>
            <MenuItem value={"Last week"}>Last week</MenuItem>
            <MenuItem value={"This week"}>This week</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <Bar options={options} data={data} />
              
</div>
<div className="col-lg-6">
<div className="container-fluid">
        <h1 className="page-title text-center text-md-left">Recently Added List</h1>
        <div className="section-data">
     
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
                  <th>Status</th>
                  <th>Product Name</th>
                  <th>Price Per Unit</th>
                </tr>
              </thead>
              <tbody>
                {productlist?.map((ele) => {
                  return (
                    <tr>
                      <td className="productimgname">
                      
                        <a className="product-name" href>
                         Active
                        </a>
                      </td>
                      <td>{ele?.uom}</td>
                      
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
      </div>
    </>
  );
};

export default SalesGraph;
