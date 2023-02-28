import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProducts from "./addproduct";
import ProductList from "./productlist";
import Dashboard from "./dashboard";
import Login from "./login";
export default function RedirectRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addproduct" element={<AddProducts />} />
      <Route path="/productlist" element={<ProductList />} />
    </Routes>
  );
}
