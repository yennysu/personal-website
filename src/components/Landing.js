import React from 'react';
import LandscapeSVG from './LandscapeSVG'
import { Box, Grid, Typography, Paper, CardContent, Container}  from '@material-ui/core/';

class Landing extends React.Component {

  landscape() {
    const inputs = {
      style: {
        margin: '1%'
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
