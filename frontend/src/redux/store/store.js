import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import prodReducer from "../products/reducers";
import { pathReducer } from "../path/reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  prodReducer,
  pathReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
