import React from 'react';
import { landscapeSVG } from './LandscapeString'
import $ from 'jquery';

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
			},
    };

    return (
      <div {...inputs.svg}/>
    )
  }
}

export default LandscapeSVG
