import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import itemsReducer from "./itemsReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    items: itemsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))