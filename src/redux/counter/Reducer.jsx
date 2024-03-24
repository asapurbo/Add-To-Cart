import { INCREMENT, DECREMENT } from '../counter/ActionTypes';
const initialState = {
    value: 0,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                value: state.value + action.payload
            }
        case DECREMENT:
            return {
                value: state.value - action.payload
            } 
    
        default:
            return state;
    }
} 


export default Reducer;