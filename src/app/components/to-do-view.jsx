import React from 'react'

export class ToDoView extends React.Component {
  constructor(p){
    super(p);
  }
    render() {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
}