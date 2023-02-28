import { instance } from "./services";

export const AddProduct = async (payload) => {
  const { data } = await instance.post("/api/add_vendor_product", payload);
  return data;
};

export const AddOrder = async (payload) => {
  const { data } = await instance.post("/api/add_order", payload);
  return data;
};
