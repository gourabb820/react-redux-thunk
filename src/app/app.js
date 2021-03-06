import React ,{useState} from "react";
import { connect } from "react-redux";
import {setName} from './actions/userAction'


let Equal = (props)=>{
    const [state, setState] = useState(0)
    return (
        <div>
            {console.log(props.user)}
            <h1>{props.user.name}</h1>
             <h1>Value {state}</h1> 
               <button onClick={()=>{
                  setState(prev=> {
                      return ++prev})
              }}>ADD</button> 
               <button onClick={()=>{
                  setState(prev=> {
                      return --prev})
              }}>SUBS</button> 
              <button onClick={()=>{
                  props.setName('ppp')
              }}>Change Name</button> 
        </div>

    );
}


///which property wanna to use in this component
const mapStateToProps=(state)=>{
    return {
        user: state.userReducer,
        math: state.mathReducer
    }
}

//which action wants to dispatch there
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

export default  connect(mapStateToProps,mapDispatchToProps)(Equal)


