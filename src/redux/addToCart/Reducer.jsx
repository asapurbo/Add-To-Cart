import { ADDCART, ADDTOCARTDECREMENT, ADDTOCARTINCREMENT, COMPLETELYDELETED } from "./ActionTypes";
import initialState from "./InitialState";

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDCART:
      if (state.some((cart) => cart.id === action.payload.id)) {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: item.count + 1,
            };
          }
          return item;
        });
      } else {
        return [
          ...state,
          {
            ...action.payload,
            count: 1,
          },
        ];
      }
    case ADDTOCARTINCREMENT:
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
    case ADDTOCARTDECREMENT:
      return state
        .map((item) => {
          if (item.id === action.payload) {
            if (item.count <= 1) {
              return undefined;
            } else {
              return {
                ...item,
                count: item.count - 1,
              };
            }
          }
          return item;
        })
        .filter((item) => item !== undefined);

    case COMPLETELYDELETED:
      return state.map((item) => {
        if(item.id === action.payload) {
          return undefined
        }
        return item
      }).filter((item) => item !== undefined)

    default:
      return state;
  }
};

export default Reducer;
