import React from 'react'
import ReactDOM from 'react-dom'
import FooterNav from './footer-nav.js'
import BurgerNav from './burger-nav.js';
import {GETtodos, GETtodo} from './logic/todos.js'
import {HashRouter} from "react-router-dom"

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      todoObj: []
    };
  }

  async componentDidMount(){
    const todos = await GETtodos();
    this.setState({todos});
  }

  render() {
      return ( 
          <div>
              <BurgerNav />
              <FooterNav todos={this.state.todos}>
              </FooterNav>
          </div>
          );
      }
}

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'))