import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { darkModeReducer } from "./darkModeReducer";
import { inputReducer } from "./inputReducer.js"
import {customerReducer} from "./customerReducer.js"
import { composeWithDevTools } from "@redux-devtools/extension" 
import {thunk} from "redux-thunk"

const rootReducer = combineReducers({ cashReducer, darkModeReducer, inputReducer, customerReducer });
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)
));
