import { combineReducers } from "redux";
import tabReducer from "./Tabs/TabReducer";

export default combineReducers({
    tabs: tabReducer,
})