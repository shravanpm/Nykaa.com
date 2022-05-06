export const PRODUCTDETAILS = "PRODUCTDETAILS";
export const BAG = "BAG";
export const BAGITEM = "BAGITEM";
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

export const bagItem = (data) => {
  return {
    type: BAGITEM,
    payload: data,
  };
};
