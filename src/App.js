import React from 'react';
import './style.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import LandscapeSVG from './components/LandscapeSVG'
import About from './components/About'
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

  links() {
    return (
      <Router>
        <Link to="/about">About</Link>
        <Route path="/About" component={About}/>
      </Router>
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
        {this.links()}
        {this.landscape()}
      </div>
    );
  }
}

export default App;
