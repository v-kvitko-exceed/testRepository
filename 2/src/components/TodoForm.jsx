import React from 'react';
import './App.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  render() {
    return (
      <div className="inputForm">
          <input type="checkbox" className="allCheck" 
         // onClick={()=> }
          /> 
        <input 
          className="inputText"
          type="text"
          placeholder="✓    What needs to be done?"
          value={this.state.value}
          onChange={this.onChange}
          onClick ={this.onSubmit}
        />

      </div>
    );
  }
  


  onSubmit() {
    this.props.addTodo(this.state.value);
    this.setState({ value: "" });
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }
}
export default TodoForm;
