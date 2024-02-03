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
              <TodoRowItem
               rowNum={props.todos[0].rowNum}
               rowDescription={props.todos[0].rowDescription}
              rowAssigned={props.todos[0].rowAssigned}/>
              <TodoRowItem
               rowNum={props.todos[1].rowNum}
               rowDescription={props.todos[1].rowDescription}
              rowAssigned={props.todos[1].rowAssigned}/>
              <TodoRowItem
               rowNum={props.todos[2].rowNum}
               rowDescription={props.todos[2].rowDescription}
              rowAssigned={props.todos[2].rowAssigned}/>
              
            </tbody>

        </table>
    )

}

export default TodoTable