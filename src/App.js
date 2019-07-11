import React from 'react';
import './style.css';
import LandscapeSVG from './components/LandscapeSVG'
import { Box, Grid, Typography, Paper, CardContent, Container}  from '@material-ui/core/';

class App extends React.Component {

  render() {
    const inputs ={
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
          <LandscapeSVG/>
          <div {...inputs.textDiv}>
            <Typography variant="h2" color='primary' align="center">
              <Box letterSpacing={6}>
              yenny su
              </Box>
            </Typography>
          </div>
      </div>
    );
  }
}

export default App;
