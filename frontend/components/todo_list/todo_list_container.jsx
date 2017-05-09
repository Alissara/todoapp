import { connect } from 'react-redux';
import TodoList from './todo_list';
import * as Actions from '../../actions/todo_actions';
import allTodos from '../../reducers/selectors';
import * as ErrorsActions from '../../actions/error_actions';

function mapStateToProps(state){
    return {
      todos: allTodos(state),
      errors: state.errors
    };
}

function mapDispatchToProps(dispatch){
  return {
    createTodo: (todo) => dispatch(Actions.createTodo(todo)),
    deleteTodo: (todoId) => dispatch(Actions.deleteTodo(todoId)),
    fetchTodos: (todos) => dispatch(Actions.fetchTodos(todos)),
    updateTodo: (id) => dispatch(Actions.updateTodo(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
