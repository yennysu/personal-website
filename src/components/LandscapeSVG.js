import React from 'react';
import { landscapeSVG } from './LandscapeString'
import $ from 'jquery';
import { Grid, Typography, Paper, CardContent, Container}  from '@material-ui/core/';

class LandscapeSVG extends React.Component {

  constructor(props) {
		super(props);

    var landscapeDiv = document.createElement('div');

    landscapeDiv.innerHTML = landscapeSVG;
    this.svg = $(landscapeDiv).find('svg')[0];
    this.svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    this.svg.setAttribute('viewBox', '0 0 1280 800')
  }

  render() {

    const inputs = {
			svg: {
				dangerouslySetInnerHTML: {__html: $(this.svg).prop('outerHTML')},
        overflow: 'hidden',
        maxWidth: '100%',
        paddingBottom: '75%',
        position: 'relative'
			},
      SVGcontainer: {
        style: {
          maxWidth: '100%',
          overflowX: 'hidden',
          margin: 10
        },
      },
    };

    return (
      <Container size='xs'>
        <Grid container
          justify='center'
          spacing={0}
          {...inputs.SVGContainer}>
          <Grid item xs={12}sm={10}>
            <div {...inputs.svg}/>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default LandscapeSVG
