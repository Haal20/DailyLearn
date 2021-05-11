import React from 'react'

export class ToDoView extends React.Component {
  constructor(props){
    super(props);
  }
    render() {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
}