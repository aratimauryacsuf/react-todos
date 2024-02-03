import logo from './logo.svg';
import './App.css';

import TodoTable from './components/TodoTable';

function App() {
const todos = [
  {rowNum: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
  {rowNum: 2, rowDescription: 'Water Plants', rowAssigned: 'User Two'},
  {rowNum: 3, rowDescription: 'Make Dinner', rowAssigned: 'User One'},
  {rowNum: 4, rowDescription: 'Charge Phone', rowAssigned: 'User One'}
]

  return (
    <div className= 'mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'> 
          <TodoTable todos={todos} />  
        </div>
      </div>
    </div>
  );
}

export default App;
