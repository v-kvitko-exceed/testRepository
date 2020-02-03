import React from 'react';
import TodoForm from './TodoForm';
import FilterButtons from './FilterButtons';
import TodoList from './TodoList'
import Count from './Count'
import './App.css';
// import { ToastContainer } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css';





class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      nextId: 1,
      filterMode: 1
    }

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.setFilterMode = this.setFilterMode.bind(this);
    this.deleteComplete = this.deleteComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteComplete() { this.setState({ todos: this.state.todos.filter((todo) => !todo.complete) }) }

  deleteTodo(id) {
    console.log('DELETE', id)
    toast("DELETED !");
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) })
  }

  setFilterMode(mode) { this.setState({ filterMode: mode }); }

  addTodo(text) {
    this.setState({
      todos: [...this.state.todos, { id: this.state.nextId, text: text, complete: false }], nextId: this.state.nextId + 1
    });
   
  }

  toggleTodo(todoKey) {
    this.setState({
      todos: this.state.todos.map(todo => todo.id === todoKey ? { ...todo, complete: !todo.complete } : todo)
    });
  }

  toggleAllTodo(todoKey) {
    this.setState({
      todos: this.state.todos.map(todo => todo.id === todoKey ? { ...todo, complete: !todo.complete } : todo)
    });
  }

  render() {
    return (
      <div  >
            <ToastContainer />
        <div className="td" >
          <text className="tod">todos</text>
        </div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          toggle={this.toggleTodo}
          filterMode={this.state.filterMode}
          deleteTodo={this.deleteTodo}
        />
        <div className="t">
          <Count todos={this.state.todos} />
          <FilterButtons
            mode={this.state.filterMode}
            setFilter={this.setFilterMode}
            deleteCompleted={this.deleteComplete} />
            
        </div>
      </div>
    );
  }
}

export default TodoApp
