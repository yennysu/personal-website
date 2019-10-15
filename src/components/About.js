import React from 'react';
import { Box, Grid, Typography, Paper, CardContent, Container}  from '@material-ui/core/';

class About extends React.Component {

  render() {
    const inputs = {
      mainDiv: {
        style: {
          marginTop: '3%'
        }
      },
      contentDiv: {
        style: {
          marginTop: '2%'
        }
      }
    }
    return (
      <div {...inputs.mainDiv}>
      <Container size='sm'>
        <Typography variant='h4' color='secondary' align='left'>
          about me
        </Typography>
        <div {...inputs.contentDiv}>
          <Typography variant='h6' align='left'>
          Data scientist. Data viz lover.
          <br/><br/>
          Founded two startups.
          <br/>
          Pacific Crest Trail Thru-Hiker 2017.
          <br/>
          Formerly portfolio management at BlackRock.
          <br/>
          Columbia University, Class of 2013.
          <br/><br/>
          When I'm not coding or modeling, you can find me out in the woods or on a mountain.
          </Typography>
        </div>
      </Container>
      </div>
    )
  }
}

export default About
