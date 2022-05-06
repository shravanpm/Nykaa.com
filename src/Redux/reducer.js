import { PRODUCTDETAILS , BAG  , ADD_PRODUCT} from "./action";

const init = {
  productDetails:{} , bag:0, cartProducts:[]
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case PRODUCTDETAILS:
      return { ...store, productDetails: payload };
    case BAG:
      return {...store,bag:store.bag+1}
        case ADD_PRODUCT:
          return {...store, cartProducts:[...store.cartProducts,payload]};
        default:
      return store;
  }
};
