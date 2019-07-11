import React from 'react';
import './style.css';
import LandscapeSVG from './components/LandscapeSVG'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Box, Grid, Typography, Paper, CardContent, Container}  from '@material-ui/core/';

class App extends React.Component {

  headline() {
    return (
      <Typography variant="h2" color='primary' align="center">
        <Box letterSpacing={6}>
        yenny su
        </Box>
      </Typography>
    )
  }

  landscape() {
    const inputs = {
      style: {
        margin: '3%'
      }
    }
    return(
      <div {...inputs}>
        <LandscapeSVG/>
      </div>
    )
  }

  render() {
    const inputs = {
      mainDiv: {
        style: {
          margin: '5%'
        }
      },
      textDiv: {
        style: {
          margin: '3%'
        }
      }
    }

    return (
      <div {...inputs.mainDiv}>
        {this.headline()}
        {this.landscape()}
      </div>
    );
  }
}

export default App;
