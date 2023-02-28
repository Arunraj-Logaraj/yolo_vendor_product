import React from "react";
import RedirectRoutes from "./routes";
import { VendorsList } from "./VendorsList";
import ProductList from "./productlist";
import { CreateSaleOrder } from "./CreateSaleOrder";
import { SettingsComp } from "./Settings/SettingsComp";
import { progress } from "./images/icons/filter.svg";
import AddProducts from "./addproduct";

function App() {
  return (
    // <AddProducts />
    // <ProductList />
    // <RedirectRoutes />
    // <SettingsComp />
    <VendorsList />
    // <CreateSaleOrder />
  );
}

export default App;
