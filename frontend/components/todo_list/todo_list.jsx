import React from 'react';
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_list_form';

class TodoList extends React.Component {

  componentDidMount(){
    this.props.fetchTodos();
  }

  render(){
    const { todos, createTodo, deleteTodo, receiveErrors, updateTodo } = this.props;

    return (
      <div>
        <ul>
          {todos.map((todo) => {
            return <TodoListItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo} />;
          })}
        </ul>
        <TodoListForm
          createTodo={ createTodo }
          errors={ this.props.errors }/>
      </div>
    );
  }
}

export default TodoList;
