import { combineReducers } from "redux";
import addToNewProduct from "../addNewProduct/Reducer";
import addToCart from "../addToCart/Reducer";
import counterReducre from "../counter/Reducer";

const rootReducer = combineReducers({
  addProduct: addToNewProduct,
  addToCart: addToCart,
  counter: counterReducre,
});

export default rootReducer;
