import React from 'react';
import PropTypes from 'prop-types';

export class ToDoView extends React.Component {
  constructor(p){
    super(p);
  }
    render() {
      return (
        <div>
          <br />
          <br />
          <br />
          <br />
          {this.props.children}
        </div>
      );
    }
}

ToDoView.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};