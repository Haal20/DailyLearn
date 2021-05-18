import React from 'react';
import { AppContext } from "../logic/create-context.js";

export class FormCreateToDo extends React.Component {
  constructor(p){
    super(p);
    this.state = {
      type: '',
      name: '',
      time: '',
    };
  }

  handeOnClick(){
    this.props.onPostSubmit(this.state.type, this.state.name, this.state.time);
    this.setState({type:'', name:'', time:''});
  }

    render() {
      return (
        <div>
          Skapa ny att-göra (skriv vad som behövs göras)
          <form onSubmit={this.props.onPostSubmit}>
            <label>
              <p>Uppgifts typ: </p><input placeholder="Skriv typ av uppgift..." value={this.state.type} onChange={(e) => this.setState({type: e.target.value})} />
            </label>
            <br />
            <label>
              <p>Uppgifts namn: </p><input placeholder="Skriv namn på uppgift..." value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
            </label>
            <br />
            <label>
              <p>Förväntad tid: </p><input placeholder="Skriv hur lång tid elev förväntas studera..." value={this.state.time} onChange={(e) => this.setState({time: e.target.value})} />
            </label>
            <div>
              <button onClick={this.handeOnClick.bind(this)}>Skapa att-göra</button>
            </div>
          </form>
          <br/>
          {/* TODO: Skriv ut komponent som skapas */}
        </div>
      );
    }
  }

FormCreateToDo.contextType = AppContext;