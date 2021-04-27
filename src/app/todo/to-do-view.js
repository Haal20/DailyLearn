import React from 'react'
import Users from './users';

class ToDoView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userId: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const input = e.target.value;
    this.setState({userId: input});
  }

  handleFormSubmit() {
    const userId = this.state.userId
    this.setState({userId: userId});
  }

    render() {
      return (
        <div>
        <h2>Hämta lagrad användare med id (finns med id 0-9)</h2>
        <br/>
        <form onSubmit={this.handleFormSubmit}>
          <label>
          Hämta användare: <br/> <input placeholder="Användare du vill hämta..." value={this.state.userId} onChange={this.handleChange} />
          </label>
          <button type="submit">Hämta användare</button>
        </form>
        Här ska en användare beroende på Id visas
        <br/>
        {this.state.userId} 
        <Users userId={this.state.userId} />
        </div>
      );
    }
  }
   
  export default ToDoView