import React from 'react';
import Todo from './Todo';
import './App.css';

function TodoList({ todos, toggle, filterMode, deleteTodo }) {
  const todoComps = todos
    .filter(todo => {
      switch (filterMode) {
        case 1: return true;
        case 2: return !todo.complete;
        case 3: return todo.complete;
      }
    })
    .map(todo => <Todo {...todo} key={todo.id} completed={todo.complete} toggle={toggle} deleteTodo={deleteTodo} />);
  return (
    <div>  {todoComps}  </div>
  )
}
export default TodoList;
