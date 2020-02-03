import React from 'react';
import './App.css';

class Todo extends React.Component {

  render() {

    return (
      <div className="input" >

        <label>
          <input type="checkbox" class="option-input checkbox" onClick={() => this.props.toggle(this.props.id)} checked={this.props.completed ? true : false} />
        </label>
        <span className="text" >{this.props.text}</span>
        <button сlassName="delBtn" onClick={() => this.props.deleteTodo(this.props.id)}>&#10006;</button>
      </div>

    );
  }
}


export default Todo;
