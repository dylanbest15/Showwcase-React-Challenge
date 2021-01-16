import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import educationReducer from "./education/educationReducer";

const rootReducer = combineReducers({
  user: userReducer,
  education: educationReducer
})

export default rootReducer;