import { combineReducers } from "redux";
import tabReducer from "./Bottom Navigation/BottomReducer";

export default combineReducers({
    tabs: tabReducer,
})