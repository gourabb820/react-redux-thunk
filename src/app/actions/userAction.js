// export function setName(name){
//     return {
//         type: 'NAME',
//         value: 'poto'
//     }
// }


export function setName(name){
    return dispatch =>{
        setTimeout(()=>{
            dispatch({
                type: 'NAME',
                 value: 'poto'
            })
        },2000)
    }
}

export function setAge(age){
    return {
        type: 'AGE',
        value: 55
    }
}