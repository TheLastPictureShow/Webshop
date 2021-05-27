import loggedReducer from "./isLogged";
import berlinReducer from "./berlin";
import spiceReducer from "./spices";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  isLogged: loggedReducer,
  berlin: berlinReducer,
  spices: spiceReducer,
});

export default allReducer;
