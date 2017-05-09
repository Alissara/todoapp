import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';


function mapDispatchToProps(dispatch){
  return {
    removeTodo: (todoId) => dispatch(removeTodo(todoId))
  };
}

export default connect(null, mapDispatchToProps)(TodoDetailView);
