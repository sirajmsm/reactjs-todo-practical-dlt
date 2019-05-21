import React from 'react'; 

export default(props)=>{
    console.log(props)
    return(
        <li>{props.todo}<button onClick={props.mouseClick}>X</button></li>
    )
}