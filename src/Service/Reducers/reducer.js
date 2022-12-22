import { ADD_TO_CART } from "../Constants";
import { REMOVE_TO_CART } from "../Constants";


export default function carditmes(state = [], action) {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_TO_CART:
            // console.log("Reducer",action)
            return [
                ...state,
                { cardData: action.data }
            ]
        case REMOVE_TO_CART:
            state.pop()
            return [
                ...state
            ]
            break;
        default: return state
    }
} 
