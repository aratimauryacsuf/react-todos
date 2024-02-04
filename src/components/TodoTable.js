import TodoRowItem from "./TodoRowItem"

function TodoTable(props){
    
    return(
        <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              {
                props.todos.map(todo =>(
                    <TodoRowItem 
                    key = {todo.rowNum}
                    rowNum={todo.rowNum}
                    rowDescription={todo.rowDescription}
                    rowAssigned={todo.rowAssigned}
                    deleteTodo={props.deleteTodo}
                    />
                ))
              }
            </tbody>

        </table>
    )

}

export default TodoTable