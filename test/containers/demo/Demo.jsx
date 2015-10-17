import React, { PropTypes } from 'react';
import TodoTextInput from './TodoTextInput';

export default class Demo extends React.Component {

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <TodoTextInput newTodo={true}
                       onSave={this.handleSave.bind(this)}
                       placeholder='What needs to be done?' />
      </header>
    );
  }

}

Demo.propTypes = {
  addTodo: PropTypes.func.isRequired
};
