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
               rowNum={todos[0].rowNum}
               rowDescription={todos[0].rowDescription}
              rowAssigned={todos[0].rowAssigned}/>
              <TodoRowItem
               rowNum={todos[1].rowNum}
               rowDescription={todos[1].rowDescription}
              rowAssigned={todos[1].rowAssigned}/>
              <TodoRowItem
               rowNum={todos[2].rowNum}
               rowDescription={todos[2].rowDescription}
              rowAssigned={todos[2].rowAssigned}/>
              
            </tbody>

        </table>
    )

}

export default TodoTable