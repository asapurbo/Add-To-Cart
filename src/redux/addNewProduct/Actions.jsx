import { ADDPRODUCT, ADDTOENDCART, DECREMENTQUANTITY, QUANTITYDECREMENT, QUANTITYINCREMENT, STATUSAFTERDELETION } from "./ActionTypes";

export const addproduct = (value) => {
  return {
    type: ADDPRODUCT,
    payload: value,
  };
};

export const decrementquantity = (value) => {
  return {
    type: DECREMENTQUANTITY,
    payload: value,
  };
};


export const quantityIncrement = (id) => {
  return {
    type: QUANTITYINCREMENT,
    payload: id
  }
}
export const quantityDecrement = (id) => {
  return {
    type: QUANTITYDECREMENT,
    payload: id
  }
}

export const addtoendcart = (data) => {
  return {
    type: ADDTOENDCART,
    payload: data
  }
}
export const statusafterdeletion = (id, count) => {
  return {
    type: STATUSAFTERDELETION,
    payload: {
      id,
      count
    }
  }
}
