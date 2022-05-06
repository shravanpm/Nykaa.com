import {legacy_createStore as createStore} from "redux";
import {reducer} from "./reducer"


const initState = {
    cartProducts:[],
}

export const store = createStore(reducer,initState);

store.subscribe(() => {
    console.log(store.getState())
})