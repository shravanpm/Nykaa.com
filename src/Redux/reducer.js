import { ADD_PRODUCT } from "./action";


export const reducer = (store,action) => {
    switch (action.type){
        case ADD_PRODUCT:
            return {...store, cartProducts:[...store.cartProducts,action.payload]};
        default : return store;
    }
}