import { PRODUCTDETAILS , BAG} from "./action";

const init = {
  productDetails:{} , bag:0
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case PRODUCTDETAILS:
      return { ...store, productDetails: payload };
    case BAG:
      return {...store,bag:store.bag+1}
    default:
      return store;
  }
};
