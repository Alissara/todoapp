export default function allTodos({todos}){
  const keys = Object.keys(todos);
  return keys.map(k => todos[k]);
}
