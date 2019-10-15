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
          <Typography variant='body' align='left'>
          Under Construction
          </Typography>
        </div>
      </Container>
      </div>
    )
  }
}

export default About
