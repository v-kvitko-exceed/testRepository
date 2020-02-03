import React from 'react';
import './App.css';


class Count extends React.Component {
  render() {
    const activeCount = this.props.todos.filter((item) => !item.complete)
    return (
      <div className="count" >
        Active:  
          {activeCount.length}
      </div>
    )
  }
}
export default Count;
