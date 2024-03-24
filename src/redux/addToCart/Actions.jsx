import { ADDCART, ADDTOCARTDECREMENT, ADDTOCARTINCREMENT, COMPLETELYDELETED } from "./ActionTypes";

export const addCart = (value) => {
    return {
        type: ADDCART,
        payload: value
    }
}
export const addToCartIncrement = (value) => {
    return {
        type: ADDTOCARTINCREMENT,
        payload: value
    }
}
export const addToCartDecrement = (value) => {
    return {
        type: ADDTOCARTDECREMENT,
        payload: value
    }
}
export const completelydeleted = (id) => {
    return {
        type: COMPLETELYDELETED,
        payload: id
    }
}
