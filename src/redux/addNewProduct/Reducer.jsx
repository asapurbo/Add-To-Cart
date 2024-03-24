import {
  ADDPRODUCT,
  ADDTOENDCART,
  DECREMENTQUANTITY,
  QUANTITYDECREMENT,
  QUANTITYINCREMENT,
  STATUSAFTERDELETION,
} from "./ActionTypes";
import initialState from "./InitialState";

const idNumber = (id) => {
  if (id.length === 0) {
    return (id = 1);
  } else {
    const maxId = id.reduce((a, b) => Math.max(a, b.id), -1);
    return maxId + 1;
  }
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      // eslint-disable-next-line no-case-declarations
      const data = action.payload;
      return [
        ...state,
        {
          id: idNumber(state),
          ...data,
        },
      ];
    case DECREMENTQUANTITY:
      // eslint-disable-next-line no-case-declarations
      const indexNum = state.findIndex((item) => item.id === action.payload.id);
      state.splice(indexNum, 1, action.payload);
      return [...state];

    case QUANTITYDECREMENT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });

    case QUANTITYINCREMENT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    case ADDTOENDCART:
      return [...state, action.payload]

    case STATUSAFTERDELETION:
      // eslint-disable-next-line no-case-declarations
      const { id, count } = action.payload;
      
      return state.map((item) => {
        if(item.id === id) {
          return {
            ...item,
            quantity: item.quantity + count
          }
        }
        return item
      })

    default:
      return state;
  }
};

export default Reducer;
