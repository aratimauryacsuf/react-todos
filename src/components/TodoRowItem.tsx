import React from "react"

export const  TodoRowItem: React.FC<{
    rowNum: number, 
    rowDescription: string, 
    rowAssigned: string, 
    deleteTodo: Function
}>=(props) => {

    return(
     <tr onClick={() => props.deleteTodo(props.rowNum)}>
        <th scope='row'>{props.rowNum}</th>
        <td>{props.rowDescription}</td>
        <td>{props.rowAssigned}</td>
    </tr>
)
}

