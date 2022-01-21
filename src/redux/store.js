import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { todoReducer } from "./todolist/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
    todoStore: todoReducer,
    authStore: authReducer,
})

/** Need an explaintion of these two */
// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger)) // as the last parameter
);

export default store;