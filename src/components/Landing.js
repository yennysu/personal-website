import React from 'react';
import LandscapeSVG from './LandscapeSVG'

class Landing extends React.Component {

  landscape() {
    const inputs = {
      style: {
        margin: '2%'
      }
    }
    return(
      <div {...inputs}>
        <LandscapeSVG/>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.landscape()}
      </div>
    )
  }
}

export default Landing
