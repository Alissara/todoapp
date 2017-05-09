import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/app';

import store from './store/store';
import selector from './reducers/selectors';
import * as actions from './actions/todo_actions';
import { getTodo } from './util/todo_api_util';
import * as ErrorActions from './actions/error_actions';


//remove this later
window.store = store;
window.selector = selector;
window.actions = actions;
window.getTodo = getTodo;

document.addEventListener("DOMContentLoaded", function(){
  const rootElement = document.getElementById('root');
  ReactDOM.render(<Root />, rootElement);
});
