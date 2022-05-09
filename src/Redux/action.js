export const PRODUCTDETAILS = "PRODUCTDETAILS";
export const BAG = "BAG";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const USER_DETAILS = "USER_DETAILS";
export const USER_STATUS = "USER_STATUS";
export const USER = "USER"
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
  export const userDetails = (data) => {
    return {
        type: USER_DETAILS,
        payload: data,
    };
};

export const userStatus = (data) => {
    return {
        type: USER_STATUS,
        payload: data,
    };
}
export const setUser = (data)=>{
  return {
    type: USER,
    payload: data,
};
}