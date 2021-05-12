import React from 'react'

export class StudyTipsView extends React.Component {
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
   
  