import React from 'react';
import { landscapeSVG } from './LandscapeString'
import $ from 'jquery';
import { TimelineMax, Sine, Power0 } from 'gsap/all';
import { Grid, Container}  from '@material-ui/core/';

var tlSun = new TimelineMax()
var tlClouds = new TimelineMax()

class LandscapeSVG extends React.Component {

  constructor(props) {
		super(props);

    var landscapeDiv = document.createElement('div');

    landscapeDiv.innerHTML = landscapeSVG;
    this.svg = $(landscapeDiv).find('svg')[0];
    this.svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    this.svg.setAttribute('viewBox', '0 0 1280 800')
  };

  componentDidMount() {
    this.moveSun();
    this.moveClouds();
  };

  moveSun() {
    tlSun.to('#sun', 1, {scale: 1.04, transformOrigin: 'center center', ease: Sine.easeInOut, repeat: -1, yoyo: true}, 0)
    tlSun.to('#sunRing', 5, {rotation: 90, transformOrigin: 'center center', ease: Sine.easeInOut, repeat: -1, yoyo: true}, 0)
    return tlSun
  }

  moveClouds() {
    tlClouds.add('cloudStart')
            .fromTo('#cloudFGUpper', 6, {x: '100%', ease: Power0.easeNone}, {x: '60%', ease: Power0.easeNone, repeat: -1, yoyo: true}, 0)
            .fromTo('#cloudFGLower', 8, {x: '-10%', ease: Power0.easeNone}, {x: '40%', ease: Power0.easeNone, repeat: -1, yoyo: true}, 0)
            .fromTo('#cloudBGLeft', 10, {x: '-40%', ease: Power0.easeNone}, {x: '150%', ease: Power0.easeNone, repeat: -1, yoyo: true}, 0)
            .fromTo('#cloudBGRight', 8, {x: '-240%', ease: Power0.easeNone}, {x: '100%', ease: Power0.easeNone, repeat: -1, yoyo: true}, 0)
    return tlClouds
  }

  render() {

    const inputs = {
			svg: {
				dangerouslySetInnerHTML: {__html: $(this.svg).prop('outerHTML')},
        overflow: 'hidden',
        position: 'relative'
			},
      SVGcontainer: {
        style: {
          maxWidth: '100%',
          overflowX: 'hidden',
        },
      },
    };

    return (
      <Container size='m'>
        <Grid container
          justify='center'
          spacing={0}
          {...inputs.SVGContainer}>
          <Grid item xs={12}>
            <div {...inputs.svg}/>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default LandscapeSVG
