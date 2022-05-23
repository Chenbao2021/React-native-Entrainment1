import { createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";

import thunk from 'redux-thunk';
import userReducer from "./reducers";


const rootReducer =combineReducers({userReducer});

export const Store=createStore(rootReducer,applyMiddleware(thunk));