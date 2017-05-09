import React from 'react';

class TodoListItem extends React.Component {

  remove() {
    this.props.deleteTodo(this.props.todo);
  }

  updateTodo2(e){
    e.preventDefault();
    let newTodo = {
      id: this.props.todo.id,
      title: this.props.todo.title,
      body: this.props.todo.body,
      done: !(this.props.todo.done)
    };
    this.props.updateTodo(newTodo);
  }

  render() {
    return <li key={this.props.todo.id}>{this.props.todo.title}
      <br/>
      <button onClick={this.updateTodo2.bind(this)}>
        { this.props.todo.done ? 'Undo' : 'Done' }
      </button>
      <button onClick={this.remove.bind(this)}>
        Delete
      </button>
    </li>;
  }
}

export default TodoListItem;
