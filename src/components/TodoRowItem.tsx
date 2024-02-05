import React from "react"

function TodoRowItem(props:{
    rowNum: number, 
    rowDescription: string, 
    rowAssigned: string, 
    deleteTodo: Function
}){

    return(
     <tr onClick={() => props.deleteTodo(props.rowNum)}>
        <th scope='row'>{props.rowNum}</th>
        <td>{props.rowDescription}</td>
        <td>{props.rowAssigned}</td>
    </tr>
)
}

export default TodoRowItem