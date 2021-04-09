import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            message: "in react from state as a prop"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage() {
        this.setState({
            message: "in react from (changed) state as a prop"
        });
    }

  render() {
      return <div>
          <h1>Hello world {this.state.message}!</h1>
          <button onClick={this.updateMessage} >Click me!</button>
          </div> 
      }
}

ReactDOM.render(<App message="from react with prop" />, document.getElementById('root'))