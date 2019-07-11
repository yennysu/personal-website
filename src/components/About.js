import React from 'react';
import './style.css';
import LandscapeSVG from './components/LandscapeSVG'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class About extends React.Component {

  render() {
    return (
      <Typography variant='h1'>
        About meeee
      </Typography>
    )
  }
}

export default About
