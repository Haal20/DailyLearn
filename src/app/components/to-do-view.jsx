import React from 'react';
import PropTypes from 'prop-types';

export class ToDoView extends React.Component {
  constructor(p){
    super(p);
  }
    render() {
      return (
        <div className='createForm'>
          {this.props.children}
        </div>
      );
    }
}

ToDoView.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};