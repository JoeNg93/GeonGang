import React, { Component } from 'react';
import SkinColorScreen from './SkinColorScreen';

class SkinColorScreenContainer extends Component {
  state = {
    colorText: 'Medium',
    sliderVal: 50,
    colorVal: 'hsl(25, 55%, 50%)'
  };

  onColorChange(newSliderVal) {
    this.setState({
      colorVal: `hsl(25, 55%, ${100 - newSliderVal}%)`,
      sliderVal: newSliderVal
    });
    if (newSliderVal >= 3 && newSliderVal <= 19) {
      this.setState({ colorText: 'Very fair' });
    } else if (newSliderVal >= 20 && newSliderVal <= 36) {
      this.setState({ colorText: 'Fair' });
    } else if (newSliderVal >= 37 && newSliderVal <= 53) {
      this.setState({ colorText: 'Medium' });
    } else if (newSliderVal >= 54 && newSliderVal <= 70) {
      this.setState({ colorText: 'Olive' });
    } else if (newSliderVal >= 71 && newSliderVal <= 87) {
      this.setState({ colorText: 'Brown' });
    } else if (newSliderVal >= 88 && newSliderVal <= 100) {
      this.setState({ colorText: 'Dark brown' });
    }
  }

  render() {
    return (
      <SkinColorScreen
        colorVal={this.state.colorVal}
        sliderVal={this.state.sliderVal}
        colorText={this.state.colorText}
        onColorChange={this.onColorChange.bind(this)}
      />
    );
  }
}

export default SkinColorScreenContainer;
