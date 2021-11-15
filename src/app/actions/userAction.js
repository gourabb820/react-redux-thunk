// export function setName(name){
//     return {
//         type: 'NAME',
//         value: 'poto'
//     }
// }

//working with async dispatch using thunk
// export function setName(name){
//     return dispatch =>{
//         setTimeout(()=>{
//             dispatch({
//                 type: 'NAME',
//                  value: 'poto'
//             })
//         },2000)
//     }
// }
// import promise from "redux-promise-middleware";
//working with asyn promise
export function setName(name){
    return {
        type: "NAME",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(name);
            }, 2000);
        })
    };
}

export function setAge(age){
    return {
        type: 'AGE',
        value: 55
    }
}