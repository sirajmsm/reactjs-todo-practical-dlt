import React from 'react';

export default(props)=>{
    console.log(props)
    return(
        <div>
            {
                props.todos.map(todo=>
                    <li>{todo}<button onClick={props.mouseClick}>X</button></li>
                )
            }
        </div>
    )
}