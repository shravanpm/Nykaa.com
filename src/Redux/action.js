export const PRODUCTDETAILS = "PRODUCTDETAILS";

export const productDetails = (data) => {
  return {
    type: PRODUCTDETAILS,
    payload: data,
  };
};