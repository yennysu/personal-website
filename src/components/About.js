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
          Yenny spends her time on front-end development and design, data analysis, and business development. Previously, she provided consulting and portfolio management services at BlackRock, where she conducted investment strategy and financial analyses for some of the world’s largest asset owners. In high school, she interned for two summers at NASA’s Kennedy Space Center.
          <br/><br/>
          Yenny enjoys backpacking, skiing, and climbing in the outdoors. She once spent half a year hiking from Mexico to Canada on the Pacific Crest Trail.
          <br/><br/>
          Social Media Links
          <br/><br/>
          Contact
          </Typography>
        </div>
      </Container>
      </div>
    )
  }
}

export default About
