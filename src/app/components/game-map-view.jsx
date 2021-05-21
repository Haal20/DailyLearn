import React from 'react';
import image from 'url:../images/map.png';

export class GameMapView extends React.Component {
    render() {
      return (
        <div className='createForm'>
          <img src={image} />
        </div>
      );
    }
}