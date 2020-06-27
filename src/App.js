import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, CompleteTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      className='todo text'
    >
      {todo.text}
      <div>
        <button className='complete btn' onClick={() => CompleteTodo(index)}>
          {' '}
          Completed
        </button>
        <button className='remove btn' onClick={() => removeTodo(index)}>
          {' '}
          Delete
        </button>
      </div>
    </div>
  );
}
function TodoForm({ addTodo }) {
  const [value, setValues] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValues('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        className='input'
        placeholder='Add Todos...'
        onChange={(e) => setValues(e.target.value)}
      ></input>
    </form>
  );
}

function App() {
  //one todos is the state and the other is the method of the state we want to upadate
  const [todos, setTodos] = useState([
    { text: 'Calling to Jaimil Hussain', isCompleted: 'fasle' },
    { text: 'Reparing Laptop', isCompleted: 'fasle' },
    { text: 'Completing assignment', isCompleted: 'fasle' },
  ]);
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const CompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        <h3 className='center'>Jamil's Todo List</h3>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            CompleteTodo={CompleteTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
