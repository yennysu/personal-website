import React from 'react';
import './style.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Link as RouterLink } from 'react-router-dom'
import About from './components/About'
import Landing from './components/Landing'
import { Link, Box, Grid, Typography, Paper, CardContent, Container}  from '@material-ui/core/';

class App extends React.Component {

  headline() {

    const inputs = {
      style: {
        marginBottom: '2%'

      }
    }

    return (
      <div {...inputs}>
        <Typography variant="h2" color='primary' align="center">
          <Box letterSpacing={6}>
          yenny su
          </Box>
        </Typography>
      </div>
    )
  }

  links() {
    return (
      <Router>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={6} sm={2} md={1}>
            <Typography align='center'>
              <Link component={RouterLink} to="/">
                home
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={1}>
            <Typography align='center'>
              <Link component={RouterLink} to="/about">
                about
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={1}>
            <Typography color='primary' align='center'>
              portfolio
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={1}>
            <Typography color='primary' align='center'>
              cv
            </Typography>
          </Grid>
        </Grid>

        <Route exact path="/" component={Landing}/>
        <Route path="/Landing" component={Landing}/>
        <Route path="/About" component={About}/>
      </Router>
    )
  }

  render() {
    const inputs = {
      mainDiv: {
        style: {
          margin: '2%'
        }
      },
    }

    return (
      <div {...inputs.mainDiv}>
        <Container size='xs'>
          {this.headline()}
          {this.links()}
        </Container>
      </div>
    );
  }
}

export default App;
