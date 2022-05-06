export const PRODUCTDETAILS = "PRODUCTDETAILS";
export const BAG = "BAG";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const productDetails = (data) => {
  return {
    type: PRODUCTDETAILS,
    payload: data,
  };
};
export const bag = () => {
  return {
    type: BAG,
    payload: 1,
  };
};
export const addProduct = (data)=>{
  return {
      type : ADD_PRODUCT,
      payload : data,
  };
  };