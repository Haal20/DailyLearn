import React from 'react'

class ToDoView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const localData = localStorage.getItem('localString');
    this.setState({localStorageData: localData });
  }

    render() {
      return (
        <div>
          <h1>Tisdag</h1>
          Här ska "att-göra" listan vara
          <br />
          <br />
          Du har sparat detta i LocalStorage: <br/> {this.state.localStorageData}

        </div>
      );
    }
  }
   
  export default ToDoView