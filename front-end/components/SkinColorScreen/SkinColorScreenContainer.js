import React, { Component } from 'react';
import SkinColorScreen from './SkinColorScreen';
import { connect } from 'react-redux';
import { setSkinColor } from '../../actions/userInput';

class SkinColorScreenContainer extends Component {
  state = {
    sliderVal: 50,
    colorVal: 'hsl(25, 55%, 50%)'
  };

  onColorChange = sliderVal => {
    let skinColor = '';
    if (sliderVal >= 3 && sliderVal <= 19) {
      skinColor = 'Very fair';
    } else if (sliderVal >= 20 && sliderVal <= 36) {
      skinColor = 'Fair';
    } else if (sliderVal >= 37 && sliderVal <= 53) {
      skinColor = 'Medium';
    } else if (sliderVal >= 54 && sliderVal <= 70) {
      skinColor = 'Olive';
    } else if (sliderVal >= 71 && sliderVal <= 87) {
      skinColor = 'Tan';
    } else if (sliderVal >= 88 && sliderVal <= 100) {
      skinColor = 'Dark';
    }

    this.setState({
      colorVal: `hsl(25, 55%, ${100 - sliderVal}%)`,
      sliderVal
    });
    this.props.setSkinColor(skinColor);
  };

  render() {
    return (
      <SkinColorScreen
        colorVal={this.state.colorVal}
        sliderVal={this.state.sliderVal}
        colorText={this.props.skinColor}
        onColorChange={this.onColorChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  skinColor: state.userInput.skinColor
});

export default connect(mapStateToProps, { setSkinColor })(
  SkinColorScreenContainer
);
