import React from 'react'
import ReactDOM from 'react-dom'
import FooterNav from './footer-nav.js'
import BurgerNav from './burger-nav.js';
import {GETtodos} from './logic/todos.js'

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
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
            <FooterNav todos={this.state.todos} />
          </div>
          );
      }
}

ReactDOM.render(<App />, document.getElementById('root'))