import React from 'react';
import './style.css';
import LandscapeSVG from './components/LandscapeSVG'
import { Grid, Typography, Card, CardContent, Container}  from '@material-ui/core/';

function App() {
  return (
    <div>
      <Container size='xs'>
          <Card>
            <CardContent>
              <LandscapeSVG/>
            </CardContent>
          </Card>
      </Container>

        <Typography variant="h1" color='primary' align="center">
          YENNY SU
        </Typography>
    </div>
  );
}

export default App;
