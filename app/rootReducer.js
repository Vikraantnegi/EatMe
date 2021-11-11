import { combineReducers } from "redux";
import tabReducer from "./BottomNavigation/BottomReducer";

export default combineReducers({
    tabs: tabReducer,
})