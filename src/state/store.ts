import reducer from "./reducer/index";
import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"

export const store = createStore(
    reducer,
    {},
    applyMiddleware(thunk)
)

