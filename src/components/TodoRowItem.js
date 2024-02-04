function TodoRowItem(props){

    
    return(
     <tr onClick={() => props.deleteTodo(props.rowNum)}>
        <th scope='row'>{props.rowNum}</th>
        <td>{props.rowDescription}</td>
        <td>{props.rowAssigned}</td>
    </tr>
)
}

export default TodoRowItem