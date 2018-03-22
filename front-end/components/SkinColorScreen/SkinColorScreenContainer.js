import React, { Component } from 'react';
import SkinColorScreen from './SkinColorScreen';

class SkinColorScreenContainer extends Component {
  state = {
    color: 50,
    colorText: 'Medium'
  };

  render() {
    return (
      <SkinColorScreen
        color={this.state.color}
        colorText={this.state.colorText}
        onColorChange={newColor => this.setState({ color: newColor })}
      />
    );
  }
}

export default SkinColorScreenContainer;
