import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

// const initialState = {
//   1: {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   2: {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   }
// };

export default function todoReducer(state = {}, action){
  switch(action.type) {
    case RECEIVE_TODOS: {
      const todos = {};
      action.todos.forEach((todo) => {todos[todo.id] = todo; } );
      return todos;
    }
    case RECEIVE_TODO: {
      let nextState = merge({}, state);
      const id = action.todo.id;
      nextState[id] = action.todo;
      return nextState;
    }
    case REMOVE_TODO: {
      let nextState = merge({}, state);
      delete nextState[action.id];
      return nextState;
    }
    default:
      return state;
  }
}
