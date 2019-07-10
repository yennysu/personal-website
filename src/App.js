import React from 'react';
import './style.css';
import LandscapeSVG from './components/LandscapeSVG'
import { Grid, Typography, Paper, CardContent, Container}  from '@material-ui/core/';

function App() {

  const inputs = {
    landscapeContainer: {
      style: {
        maxWidth: '100%',
        overflowX: 'hidden',
        margin: 10
      },
    },
  };

  return (
    <div>
        <LandscapeSVG/>

        <Typography variant="h2" color='primary' align="center">
          YENNY SU
        </Typography>
    </div>
  );
}

export default App;
