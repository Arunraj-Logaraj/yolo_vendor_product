import { instance } from "./services";

export const GetVenderProductById = async (id) => {
  const { data } = await instance.get(`/api/vendor_products?vendor_id=${id}`);
  return data;
};

export const GetVendorDashboard = async (id) => {
  const { data } = await instance.get(`/api/vendor_dashboard?vendor_id=${id}`);
  return data;
};



// export const GetVendorCreateSaleOrder = async (id) => {
//   const { data } = await instance.get(`/api/get_user_details?vendor_id=${id}`);
//   return data;
// };
