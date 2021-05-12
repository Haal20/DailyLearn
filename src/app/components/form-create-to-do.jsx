import React from 'react';
import PropTypes from 'prop-types';

export class FormCreateToDo extends React.Component {
  constructor(p){
    super(p);
    this.state = {
      todoInput: '',
    };
  }
    render() {
      return (
        <div>
          Skapa ny att-göra (skriv vad som behövs göras)
          <form onSubmit={this.props.onPostSubmit}>
            <label>
                <input placeholder="Skriv att-göra..." value={this.state.todoInput} onChange={(e) => this.setState({todoInput: e.target.value})} />
            </label>
            <button onClick={() => this.props.onPostSubmit(this.state.todoInput)}>Skapa att-göra</button>
          </form>
          <br/>
          {/* TODO: Skriv ut komponent som skapas */}
        </div>
      );
    }
  }

FormCreateToDo.propTypes = {
  onPostSubmit: PropTypes.func.isRequired
};