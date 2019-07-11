import React from 'react';
import { landscapeSVG } from './LandscapeString'
import $ from 'jquery';
import { TimelineMax, Sine, Power0, Power4 } from 'gsap/all';
import { Grid, Container}  from '@material-ui/core/';

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
    this.timeline();
    this.moveClouds();
    this.rotateSun();
  };

  timeline() {

    const startTime = 0
    const colorDuration = 2
    const colorStart = 3
    const revertStart = 9.5

    var tlLandscape = new TimelineMax({repeat: -1})

    tlLandscape
         .set('#stars', {autoAlpha: 0})
         .set('#moon', {autoAlpha: 0, display: 'block', scale: 0.3, x:-300, y:250, transformOrigin: 'center center'})

         //sun setting
         .to('#sun', 3, {scale: 0.5, x: 400, y: -200, transformOrigin: 'center center', ease: Power4.easeInOut}, 2)
         .to('#sun', 0.1, {autoAlpha: 0}, 4.2)
         .set('#sun', {x:-300, y:250})
         .to('#moon', 0.1, {autoAlpha: 1}, colorStart-1.1)

         //moonrise
         .to('#moon', 3, {scale: 1, x: 0, y: 0, transformOrigin: 'center center', ease: Power4.easeInOut}, colorStart-0.5)

         // colors to night
         .staggerTo("#sky_1_ stop", colorDuration, {cycle:{ stopColor: ['#3892A1', '#29545B']}, ease: Power4.easeInOut}, 0.1, colorStart)
         .to('#rockSpotsLeft', colorDuration, {fill: '#748B93'}, colorStart)
          .to('#rockSpotsRight', colorDuration, {fill: '#3C4F54'}, colorStart)
          .to('#rockRight', colorDuration, {fill: '#3C4F54'}, colorStart)
          .to('#rockLeft', colorDuration, {fill: '#748B93'}, colorStart)
          .to('#rockShadow', colorDuration, {fill: '#0A282B'}, colorStart)
          .to('#rockTop', colorDuration, {fill: '#87A5AA'}, colorStart)

          .to('#cloudFGLowerWhite', colorDuration, {fill: '#C4C4C4'}, colorStart)
          .to('#cloudFGLowerShadow', colorDuration, {fill: '#A3A3A3'}, colorStart)
          .to('#cloudFGUpperWhite', colorDuration, {fill: '#C4C4C4'}, colorStart)
          .to('#cloudFGUpperShadow', colorDuration, {fill: '#A3A3A3'}, colorStart)

          .to('#treeStems', colorDuration, {fill: '#233330'}, colorStart)
          .to('#treeFG1', colorDuration, {fill: '#2B6060'}, colorStart)
          .to('#treeFG2', colorDuration, {fill: '#2E7575'}, colorStart)
          .to('#treesFGShadow', colorDuration, {fill: '#0A282B'}, colorStart)
          .to('#treesBGStems', colorDuration, {fill: '#233330'}, colorStart)
          .to('#treesBodyBG', colorDuration, {fill: '#175E61'}, colorStart)
          .to('#forestStems', colorDuration, {fill: '#233330'}, colorStart)
          .to('#forestTrees', colorDuration, {fill: '#175E61'}, colorStart)

          .to('#trailBG', colorDuration, {fill: '#95B6B7'}, colorStart)
          .to('#trailFG', colorDuration, {fill: '#95B6B7'}, colorStart)

          .to('#hill7BG', colorDuration, {fill: '#366366'}, colorStart)
          .to('#hill6Shadow', colorDuration, {fill: '#0B2B2A'}, colorStart)
          .to('#hill6BG', colorDuration, {fill: '#123B3B'}, colorStart)
          .to('#hill5BG', colorDuration, {fill: '#2C5654'}, colorStart)
          .to('#hill4BG', colorDuration, {fill: '#0F3739'}, colorStart)
          .to('#hill3Shadow', colorDuration, {fill: '#1F4744'}, colorStart)
          .to('#hill3BG', colorDuration, {fill: '#2C5654'}, colorStart)
          .to('#hill2Shadow', colorDuration, {fill: '#1E3837'}, colorStart)
          .to('#hill2BG', colorDuration, {fill: '#304F50'}, colorStart)
          .to('#mtnShadow', colorDuration, {fill: '#0A282B'}, colorStart)
          .to('#mtnBG', colorDuration, {fill: '#113032'}, colorStart)
          .to('#snow', colorDuration, {fill: '#A4B1B2'}, colorStart)

          .to('#cloudBGLeft', colorDuration, {fill: '#D6D6D6'}, colorStart)
          .to('#cloudBGRight', colorDuration, {fill: '#D6D6D6'}, colorStart)

          //stars come out
          .to('#stars', 0.5, {autoAlpha: 1}, colorStart + 0.25)

          // moonset
          .to('#moon', 3, {scale: 0.3, x: 400, y: -200, transformOrigin: 'center center', ease: Power4.easeInOut}, revertStart-2)

          // sunrise
          .to('#sun', 0.1, {autoAlpha: 1}, revertStart-1.1)
          .to('#sun', 3, {scale: 1, x: 0, y: 0, transformOrigin: 'center center', ease: Power4.easeInOut}, revertStart-1.75)

          //stars disappears
          .to('#stars', 0.5, {autoAlpha: 0}, revertStart)

          // colors to day
          .staggerTo("#sky_1_ stop", colorDuration, {cycle:{ stopColor: ['#FFF5A9', '#15B3FF']}, ease: Power4.easeInOut}, 0.1, revertStart)
          .to('#rockSpotsLeft', colorDuration, {fill: '#858687'}, revertStart)
          .to('#rockSpotsRight', colorDuration, {fill: '#9F9FA1'}, revertStart)
          .to('#rockRight', colorDuration, {fill: '#858687'}, revertStart)
          .to('#rockLeft', colorDuration, {fill: '#9F9FA1'}, revertStart)
          .to('#rockShadow', colorDuration, {fill: '#515151'}, revertStart)
          .to('#rockTop', colorDuration, {fill: '#B8B8BA'}, revertStart)

          .to('#cloudFGLowerWhite', colorDuration, {fill: '#F9F9F9'}, revertStart)
          .to('#cloudFGLowerShadow', colorDuration, {fill: '#A3A3A3'}, revertStart)
          .to('#cloudFGUpperWhite', colorDuration, {fill: '#F9F9F9'}, revertStart)
          .to('#cloudFGUpperShadow', colorDuration, {fill: '#A3A3A3'}, revertStart)

          .to('#treeStems', colorDuration, {fill: '#534741'}, revertStart)
          .to('#treeFG1', colorDuration, {fill: '#00660E'}, revertStart)
          .to('#treeFG2', colorDuration, {fill: '#004F27'}, revertStart)
          .to('#treesFGShadow', colorDuration, {fill: '#515151'}, revertStart)
          .to('#treesBGStems', colorDuration, {fill: '#534741'}, revertStart)
          .to('#treesBodyBG', colorDuration, {fill: '#005600'}, revertStart)
          .to('#forestStems', colorDuration, {fill: '#534741'}, revertStart)
          .to('#forestTrees', colorDuration, {fill: '#005600'}, revertStart)

          .to('#trailBG', colorDuration, {fill: '#F4BD5D'}, revertStart)
          .to('#trailFG', colorDuration, {fill: '#F4C882'}, revertStart)

          .to('#hill7BG', colorDuration, {fill: '#2EAA60'}, revertStart)
          .to('#hill6Shadow', colorDuration, {fill: '#22723F'}, revertStart)
          .to('#hill6BG', colorDuration, {fill: '#27894E'}, revertStart)
          .to('#hill5BG', colorDuration, {fill: '#044F28'}, revertStart)
          .to('#hill4BG', colorDuration, {fill: '#084723'}, revertStart)
          .to('#hill3Shadow', colorDuration, {fill: '#09472B'}, revertStart)
          .to('#hill3BG', colorDuration, {fill: '#005B34'}, revertStart)
          .to('#hill2Shadow', colorDuration, {fill: '#002311'}, revertStart)
          .to('#hill2BG', colorDuration, {fill: '#00351C'}, revertStart)
          .to('#mtnShadow', colorDuration, {fill: '#333333'}, revertStart)
          .to('#mtnBG', colorDuration, {fill: '#3F3F3A'}, revertStart)
          .to('#snow', colorDuration, {fill: '#FFFFFF'}, revertStart)

          .to('#cloudBGLeft', colorDuration, {fill: '#F9F9F9'}, revertStart)
          .to('#cloudBGRight', colorDuration, {fill: '#F9F9F9'}, revertStart)


    return tlLandscape
  }

  moveClouds() {
    tlClouds.add('cloudStart')
            .fromTo('#cloudFGUpper', 6, {x: '100%', ease: Power0.easeNone}, {x: '60%', ease: Power0.easeNone, repeat: -1, yoyo: true}, 0)
            .fromTo('#cloudFGLower', 8, {x: '-10%', ease: Power0.easeNone}, {x: '40%', ease: Power0.easeNone, repeat: -1, yoyo: true}, 0)
            .fromTo('#cloudBGLeft', 10, {x: '-40%', ease: Power0.easeNone}, {x: '150%', ease: Power0.easeNone, repeat: -1, yoyo: true}, 0)
            .fromTo('#cloudBGRight', 8, {x: '-240%', ease: Power0.easeNone}, {x: '100%', ease: Power0.easeNone, repeat: -1, yoyo: true}, 0)
    return tlClouds
  }

  rotateSun() {
    var tlSun = new TimelineMax({repeat: -1, yoyo:true})

    tlSun.to('#sunRing', 5, {rotation: 90, transformOrigin: 'center center', ease: Sine.easeInOut}, 0)
    return tlSun
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
      <Container size='lg'>
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
