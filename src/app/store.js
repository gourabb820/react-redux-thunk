
// import {createStore,combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
// import promise from "redux-promise-middleware";
// import thunk from "redux-thunk";
// import { createPromise } from "redux-promise-middleware";
// import promiseMiddleware from 'redux-promise'
// import mathReducer from "./reducers/mathReducer";
// import userReducer from "./reducers/userReducer";
// const store =  createStore(combineReducers({mathReducer,userReducer}),{},applyMiddleware(createLogger(),thunk,promise()));
// export default store;
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import mathReducer from "./reducers/mathReducer";
import userReducer from "./reducers/userReducer";

export default createStore(
    combineReducers({
        mathReducer,
        userReducer
    }),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);