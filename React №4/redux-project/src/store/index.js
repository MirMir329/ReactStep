import { combineReducers, createStore } from "redux"
import { cashReducer } from "./cashReducer.js"
import { darkModeReducer } from "./darkModeReducer.js"

const rootReducer = combineReducers({cashReducer, darkModeReducer})

export const store = createStore(rootReducer);