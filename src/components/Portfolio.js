import React from 'react';
import { Box, Grid, Typography, Paper, CardContent, Container}  from '@material-ui/core/';

class Portfolio extends React.Component {

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
          portfolio
        </Typography>
        <div {...inputs.contentDiv}>
          <Typography variant='body' align='left'>
          under construction
          </Typography>
        </div>
      </Container>
      </div>
    )
  }
}

export default Portfolio
