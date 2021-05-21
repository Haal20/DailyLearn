import React from 'react';
import PropTypes from 'prop-types';

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
   
StudyTipsView.propTypes = {
  children: PropTypes.element
};