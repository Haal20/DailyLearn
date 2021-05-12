import React from 'react';

export class FormCreateToDo extends React.Component {
  constructor(p){
    super(p);
  }
    render() {
        const todoInput = this.props.todoInput;
      return (
        <div>
          Skapa ny att-göra (skriv vad som behövs göras)
          <form onSubmit={this.props.onPostSubmit}>
            <label>
                <input placeholder="Skriv att-göra..." value={todoInput} onChange={this.props.onChange} />
            </label>
            <button type="submit">Skapa att-göra</button>
          </form>
          <br/>
        </div>
      );
    }
  }