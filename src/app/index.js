
import {createStore,combineReducers, applyMiddleware} from "redux";
import logger from 'redux-logger';
import ReactDOM from "react-dom";
import Equal from './app';
import React ,{useState} from "react";
import { Provider } from "react-redux";

import store from "./store";
const initialState ={
    result:1,
    lastValue:[]
}

ReactDOM.render(<Provider store={store}><Equal/></Provider>,document.getElementById("app"));






//const store =  createStore(combineReducers({mathReducer,userReducer}),{},applyMiddleware(myLogger,logger));

// const mathReducer = (state=initialState,action)=>{
//     switch(action.type){
//         case "ADD":
//             state = {...state,result: state.result + action.value};
//             break;
//         case "SUBS":
//             state = {...state,result:state.result - action.value};
//             break;
//     }
//     return state;
// }

// const userReducer = (state={user:null,age:null},action)=>{
//     switch(action.type){
//         case "NAME":
//             state = {...state,name:  action.value};
//             break;
//         case "AGE":
//             state = {...state,age: action.value};
//             break;
//     }
//     return state;
// }

// const myLogger = (store)=>(next)=>(action)=>{
//     console.log("logged action" , action)
//     next(action)
// }

// const store =  createStore(combineReducers({mathReducer,userReducer}),{},applyMiddleware(myLogger,logger));

// store.subscribe(()=>{
//     console.log(store.getState())
// })

// store.dispatch({
//     type: "ADD",
//     value: 5

// });
// store.dispatch({
//     type: "SUBS",
//     value: 5

// });

// store.dispatch({
//     type: "NAME",
//     value: 'gourab'

// });
// store.dispatch({
//     type: "AGE",
//     value: 55

// });
