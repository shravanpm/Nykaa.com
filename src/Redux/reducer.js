import {
  PRODUCTDETAILS,
  BAG,
  ADD_PRODUCT,
  USER_DETAILS,
  USER_STATUS,
} from "./action";

const init = {
  productDetails: {},
  bag: 0,
  cartProducts: [],
  isLoggedIn: false,

  // userDetails will only be populated if user is logged in
  userDetails: {
    name: null,
    mobile: null,
    email: null,
  },
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case PRODUCTDETAILS:
      return { ...store, productDetails: payload };
    case BAG:
      return { ...store, bag: store.bag + 1 };
    case ADD_PRODUCT:
      return { ...store, cartProducts: [...store.cartProducts, payload] };
    case USER_DETAILS:
      return {
        ...store,
        userDetails: payload,
      };
    case USER_STATUS:
      return {
        ...store,
        isLoggedIn: payload,
      };
    default:
      return store;
  }
};
