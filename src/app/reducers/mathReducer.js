const mathReducer = (state={
    result:1,
    lastValue:[]
},action)=>{
    switch(action.type){
        case "ADD":
            state = {...state,result: state.result + action.value};
            break;
        case "SUBS":
            state = {...state,result:state.result - action.value};
            break;
    }
    return state;
}

export default mathReducer