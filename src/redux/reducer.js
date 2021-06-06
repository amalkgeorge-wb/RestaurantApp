import DataReducer from "./data/reducer";

import { combineReducers } from "redux";
const rootReducer = combineReducers({

  data: DataReducer,
});

export default rootReducer;