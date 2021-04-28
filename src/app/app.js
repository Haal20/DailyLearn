import React from 'react'
import ReactDOM from 'react-dom'
import FooterNav from './footer-nav.js'
import BurgerNav from './burger-nav.js';
import ToDo from './logic/todos'

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        this.setState({todos: data});
    })

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