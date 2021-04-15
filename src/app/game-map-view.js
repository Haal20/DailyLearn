import React from 'react'
import image from 'url:./images/map.png'

class GameMapView extends React.Component {
    render() {
      return (
        <div>
          <img src={image} />
        </div>
      );
    }
  }
   
  export default GameMapView