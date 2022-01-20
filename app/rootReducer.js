import { combineReducers } from "redux";
import tabReducer from "./Sidebar/TabReducer";

export default combineReducers({
    tabs: tabReducer,
})