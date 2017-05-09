export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as APIUtil from '../util/todo_api_util';
import * as ErrorActions from "./error_actions";

export function receiveTodos(todos){
  return {
    type: RECEIVE_TODOS,
    todos
  };
}

export function receiveTodo(todo){
  return {
    type: RECEIVE_TODO,
    todo
  };
}

export function removeTodo(id){
  return {
    type: REMOVE_TODO,
    id
  };
}

export const fetchTodos = () => dispatch => (
  APIUtil.getTodo().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = todo => dispatch => (
  APIUtil.createTodo(todo)
    .then(
      (todo) => {
        dispatch(receiveTodo(todo));
        dispatch(ErrorActions.clearErrors());
      },
      err => dispatch(ErrorActions.receiveErrors(err.responseJSON))
    )
);

export const updateTodo = id => dispatch => (
  APIUtil.updateTodo(id)
    .then(
      (todo) => {
        dispatch(receiveTodo(todo));
      }
    )
);

export const deleteTodo = id => dispatch => (
  APIUtil.deleteTodo(id)
    .then(
      (todo) => {
        dispatch(removeTodo(todo.id));
      }
    )
);
