import React from 'react';
import { landscapeSVG } from './LandscapeString'
import $ from 'jquery';
import { Grid, Container}  from '@material-ui/core/';

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
