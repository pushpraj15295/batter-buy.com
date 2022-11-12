import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import prodReducer from "../products/reducers";
import { pathReducer } from "../path/reducers";
import thunk from "redux-thunk";
import { authReducer } from "../auth/auth.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  prodReducer,
  pathReducer,
  
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
