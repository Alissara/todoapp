
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import TodoListContainer from './todo_list/todo_list_container';


class App extends React.Component{
  render() {
    return (
      <div>
        <h1>TODO LIST!</h1>
        <TodoListContainer />
      </div>
    );
  }
}

class Root extends React.Component{
  render() {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    );
  }
}


export default Root;
