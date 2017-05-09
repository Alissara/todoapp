import React from 'react';
import uniqueId from '../../util/util';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.linkState = this.linkState.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  linkState(key) {
   return (event => { this.setState({[key]: event.target.value}); });
 }

  submitForm(e) {
    e.preventDefault();
    let newTodo = {
      title: this.state.title,
      body: this.state.body,
      done: false
    };
    console.log(newTodo);
    this.props.createTodo(newTodo).then(
      () => this.setState({
        title: '',
        body: ''
      })
    );
  }

  render(){
    return (
      <form>
        <label>
          Title
          <input
            type="text"
            onChange={this.linkState('title')}
            value={this.state.title}></input>
        </label>

        <label>
          Body
          <input
            type="text"
            onChange={this.linkState('body')}
            value={this.state.body}></input>
        </label>

        <input
          type="submit"
          onClick={this.submitForm}
          value="Add Todo"></input>

        <br/>
        <p>{this.props.errors.join(" - ")}</p>
      </form>
    );
  }
}

export default TodoForm;
