import React from "react";

function ChildComponent1 (props){
    const {name , age , email } = props.userInfo;

    return(
        <div>
             <p>Name: {name}</p>
             <p>Age: {age}</p>
             <p>Email: {email}</p>
        </div>
    )
}
export default ChildComponent1