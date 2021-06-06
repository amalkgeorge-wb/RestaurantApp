import { createStore, combineReducers } from "redux";


import * as reducers from "./reducer";

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  
);

export { store };



