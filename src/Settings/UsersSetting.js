import addIcon from "../images/icons/add.svg";
import { GetVenderProductById } from "../api/gerProductList";
import { useEffect, useState } from "react";
import { styled } from "@mui/material";
import { Button } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { DialogActions } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Paper } from "@mui/material";
import { MenuItem } from "@mui/material";

// function BootstrapDialogTitle(props) {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// }

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const categories = [
  {
    label: "sales managers",
  },
  {
    label: "managers",
  },
  {
    label: "hotel managers",
  },
  {
    label: "service managers",
  },
];

export const UsersSetting = (props) => {
  const [productlist, setProductList] = useState([]);
  const [query1, setQuery1] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);
  // const [filterData1, setFilterData1] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const setTrue = () => {
    setOpen(true);
  };

  const setClick = () => {
    setOpen(false);
  };

  const clickHandlar = () => {
    let data = productlist;
    data.push(input);
    setProductList(productlist);
    setInput("");
    setOpen(false);
  };

  // const clickHandler = () => {
  //   const tempData = data;
  //   tempData.push(input);
  //   setData(data);
  //   setInput("");
  // };

  // const removeSecond = (value1) => {
  //   setData((oldValues) => {
  //     return oldValues.filter((fruit) => fruit !== value1);
  //   });
  // };

  // let vendor_id = "2";

  // useEffect(() => {
  //   if (vendor_id) {
  //     GetProductList(vendor_id);
  //   }
  // }, []);

  // const GetProductList = async (vendor_id) => {
  //   let res = await GetVenderProductById(vendor_id);
  //   if (res && res?.data) {
  //     setProductList(res?.data);
  //     setFilterData1(res?.data);
  //   }
  // };

  // const handleSearch = (e) => {
  //   const getSearch = e.target.value;

  //   if (getSearch.length > 0) {
  //     const searchData = productlist.filter((item) =>
  //       item.product_name.toLowerCase().includes(getSearch.toLowerCase())
  //     );
  //     setProductList(searchData);
  //   } else {
  //     setProductList(filterData1);
  //   }
  //   setQuery1(getSearch);
  // };

  return (
    <div className="container-fluid popup-3 ">
      <Dialog
        open={open}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "900px", // Set your width here
            },
          },
        }}
      >
        {/* <IconButton onClick={setClick} sx={{ position: "absolute" }}>
          <CloseIcon />
        </IconButton> */}
        <DialogTitle id="customized-dialog-title" onClose={setClick}>
          {/* <Typography variant="h4" textAlign="center" color="success"> */}
          Add User
          {/* </Typography> */}
        </DialogTitle>

        <button className="button-createsale" onClick={setClick}>
          Close
        </button>
        <DialogContent dividers>
          <DialogContentText>
            <Box
              // sx={{
              //   "& .MuiTextField-root": { m: 2, width: "55ch" },
              // }}
              sx={{
                width: 800,
              }}
              InputProps={{ sx: { height: 80 } }}
            >
              <label htmlFor="">Name</label>
              <TextField
                fullWidth
                placeholder="Title"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <br />
              <br />
              <label htmlFor="">Email Id</label>
              <br />
              <TextField
                sx={{
                  width: 400,
                }}
                fullWidth
                placeholder="Title"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              {/* <label htmlFor="">PassWord</label> */}
              <TextField
                sx={{
                  width: 300,
                }}
                fullWidth
                placeholder="Title"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <br />
              <label htmlFor="">Phone Number</label>
              <TextField
                sx={{
                  width: 800,
                }}
                fullWidth
                placeholder="Title"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <br />
              <br />
              <label htmlFor="">Role</label>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "90ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    helperText="Please select your currency"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </Box>
              <label htmlFor="">Role</label>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "90ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    helperText="Please select your currency"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={clickHandlar} color="success">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      ;
      <div className="popup-inner-4">
        <h1 className="page-title  text-center text-md-left">Users </h1>
        <div className="mb-4 text-center text-md-left">Manage Users</div>
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
                  // onChange={(e) => handleSearch(e)}
                />
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
                  <th>Name</th>
                  <th>Role</th>
                  <th>Last Login Date</th>
                </tr>
              </thead>
              <tbody>
                {productlist?.map((ele) => {
                  return (
                    <tr>
                      <td className="productimgname">
                        <a className="product-name" href>
                          {ele}
                        </a>
                      </td>
                      {/* <td>{ele?.uom}</td> */}
                      {/* <td>{ele?.package_of_unit}</td> */}
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
            <img src={addIcon} alt="" />
            <div className="product-add-link-text" onClick={setTrue}>
              Add
            </div>
          </a>
          {/* <CreateSaleOrder trigger={buttonPopup} setTrigger={setButtonPopup} /> */}
        </div>
      </div>
    </div>
  );
};
