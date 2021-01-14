import { combineReducers } from "redux";
import schoolsReducer from "./schools/schoolsReducer";

const rootReducer = combineReducers({
  schools: schoolsReducer
})

export default rootReducer;