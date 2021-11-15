const userReducer = (state={name:'gourabb',age:null},action)=>{
    switch(action.type){
        case "NAME_FULFILLED":
            console.log('hi' ,action)
            state = {...state,name:  action.payload};
            break;
            // case "NAME_PENDING":
            //     state = {...state,name:  action.value};
            //     break;
            // case "NAME":
            // state = {...state,name:  action.value};
            // break;
        case "AGE":
            state = {...state,age: action.value};
            break;
    }
    return state;
}

export default userReducer;