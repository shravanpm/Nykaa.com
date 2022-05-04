export const PRODUCTDETAILS = "PRODUCTDETAILS";
export const BAG = "BAG"
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