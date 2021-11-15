const userReducer = (state={user:null,age:null},action)=>{
    switch(action.type){
        case "NAME":
            state = {...state,name:  action.value};
            break;
        case "AGE":
            state = {...state,age: action.value};
            break;
    }
    return state;
}

export default userReducer;