export const getTodo = function() {
  return new Promise ((resolve, reject) => {
    $.ajax({ method: 'GET', url: '/api/todos'}).then(
      todos => resolve(todos),
      error => reject(error)
    );
  });
};

export const createTodo = function(data) {
  return new Promise ((resolve, reject) => {
    $.ajax({ method: 'POST', url: '/api/todos', data: {todo: data}}).then(
      todos => resolve(todos),
      error => reject(error)
    );
  });
};

export const updateTodo = function(todo) {
  return new Promise ((resolve, reject) => {
$.ajax({ method: 'PATCH', url: `/api/todos/${todo.id}`, data: { todo } }).done(
      todos => { resolve(todos); }
    );
  });
};

export const deleteTodo = function(todo) {
  return new Promise ((resolve, reject) => {
$.ajax({ method: 'DELETE', url: `/api/todos/${todo.id}` }).done(
      todos => { resolve(todos); }
    );
  });
};
