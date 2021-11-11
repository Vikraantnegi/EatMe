import { createStore, applyMiddleWare } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(
    rootReducer,
    applyMiddleWare(thunk)
)

export default store;