
import React,{useState} from 'react';
import './App.css';

import TodoTable from './components/TodoTable';

function App() {
const [todos, setTodos] = useState([
  {rowNum: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
  {rowNum: 2, rowDescription: 'Water Plants', rowAssigned: 'User Two'},
  {rowNum: 3, rowDescription: 'Make Dinner', rowAssigned: 'User One'},
  {rowNum: 4, rowDescription: 'Charge Phone', rowAssigned: 'User One'}
])

const addTodo=() => {
  console.log('Our addTodo btn has been clicked!');
  if(todos.length > 0){
    const newTodo = {
      rowNum: todos.length+1,rowDescription: 'New Todo', rowAssigned:'User Three'
    };
    setTodos(todos => [...todos, newTodo])
    console.log(todos);
  }
  
}
  return (
    <div className= 'mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'> 
          <TodoTable todos={todos} />  
          <button className= 'btn btn-primary' onClick={addTodo} >
            Add new todo
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
