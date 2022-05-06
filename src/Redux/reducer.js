import { PRODUCTDETAILS , BAG , BAGITEM} from "./action";

const init = {
  productDetails:{} , bag:0, bagItem:[]
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case PRODUCTDETAILS:
      return { ...store, productDetails: payload };
    case BAG:
      return {...store,bag:store.bag+1}
      case BAGITEM:
        return {...store, bagItem:[...store.bagItem,payload]}
    default:
      return store;
  }
};
