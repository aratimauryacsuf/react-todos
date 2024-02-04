
import React,{useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [showTodoForm, setShowTodoForm]= useState(false);

const [todos, setTodos] = useState([
  {rowNum: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
  {rowNum: 2, rowDescription: 'Water Plants', rowAssigned: 'User Two'},
  {rowNum: 3, rowDescription: 'Make Dinner', rowAssigned: 'User One'},
  {rowNum: 4, rowDescription: 'Charge Phone', rowAssigned: 'User One'}
])

const addTodo=(description, assigned) => {
  console.log('Our addTodo btn has been clicked!');
  let rowNum = 0;
  if(todos.length > 0){
    rowNum = todos[todos.length-1].rowNum +1;
  }else{
    rowNum = 1;
  }
    const newTodo = {
      rowNum: rowNum,
      rowDescription: description, 
      rowAssigned:assigned
    };
    setTodos(todos => [...todos, newTodo])
    console.log(todos);
  
  }

  const deleteTodo = (deleteTodoRowNum) => {
    let filtered = todos.filter(function(value){
      return value.rowNum !== deleteTodoRowNum;
    });
    setTodos(filtered);

  }


  return (
    <div className= 'mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'> 
          <TodoTable todos={todos}  deleteTodo={deleteTodo}/>  
          <button onClick = {() => setShowTodoForm(!showTodoForm)} className= 'btn btn-primary'  >
           {showTodoForm ? 'Close New Todo' : 'New Todo'} 
            </button>
            { showTodoForm &&
            <NewTodoForm addTodo={addTodo}/>
            }
            
        </div>
      </div>
    </div>
  );
}

export default App;
